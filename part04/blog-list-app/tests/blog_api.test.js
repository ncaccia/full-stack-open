const { test, describe, beforeEach, after, before } = require("node:test");
const supertest = require("supertest");
const assert = require("assert");
const app = require("../app");
const { connect, disconnect } = require("./mongodb.memory.test.helper");
const Blog = require("../models/blog");

const api = supertest(app);

const initialBlogs = [
  {
    title: "Yorkie Passion",
    author: "Mary & bombon",
    url: "https://www.yorkiepassion.com/",
    likes: 150,
    id: "665889a7c4d0f10fb3ac9ddc",
  },
  {
    title: "Nature World News",
    author: "Mr big Dog",
    url: "https://www.natureworldnews.com/animals/",
    likes: 37,
    id: "66588adcc4d0f10fb3ac9de0",
  },
  {
    title: "Wild Hearted",
    author: "Annastasia",
    url: "https://wild-hearted.com/",
    likes: 93,
    id: "66588affc4d0f10fb3ac9de2",
  },
  {
    title: "World Animal Protection Blog",
    author: "WAP ORG",
    url: "https://www.worldanimalprotection.org/latest/blogs/",
    likes: 103,
    id: "665893ddfa789fed9ac6e7e3",
  },
  {
    title: "Another fantastic Animals Blog!",
    author: "Anonnimus",
    url: "https://www.anotherfantasticanimalblog.com/",
    likes: 198,
    id: "6658985d9a2b944a46996200",
  },
];

describe("/api/blogs tests", () => {
  before(async () => {
    await connect();
  });

  beforeEach(async () => {
    await Blog.deleteMany({});
    console.log("Data Cleared");
    await Blog.insertMany(initialBlogs);
    console.log("DB Repopulated");
  });

  after(async () => {
    await disconnect();
  });

  test("Blogs are returned as json", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("There are 5 posted blogs", async () => {
    const response = await api.get("/api/blogs");
    assert.strictEqual(response.body.length, initialBlogs.length);
  });

  test("Blog posts have an 'id' property instead of '_id'", async () => {
    const res = await api.get("/api/blogs");
    const blogs = res.body;

    blogs.forEach((blog) => {
      assert.ok(blog.id);
      assert.strictEqual(blog._id, undefined);
    });
  });

  test("If the likes property is missing from the request, it defaults to 0", async () => {
    const newBlog = {
      title: "Test Blog",
      author: "Test Author",
      url: "http://testblog.com",
    };

    const response = await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const savedBlog = await Blog.findById(response.body.id);
    assert.strictEqual(savedBlog.likes, 0);
  });

  test("If the title property is missing from the request, respond with 400 Bad Request", async () => {
    const newBlog = {
      author: "Test Author",
      url: "http://testblog.com",
    };

    await api.post("/api/blogs").send(newBlog).expect(400);
  });

  test("If the url property is missing from the request, respond with 400 Bad Request", async () => {
    const newBlog = {
      title: "Test Blog",
      author: "Test Author",
    };

    await api.post("/api/blogs").send(newBlog).expect(400);
  });

  test("A blog can be deleted", async () => {
    const blogsAtStart = await Blog.find({});
    const blogToDelete = blogsAtStart[0];

    await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

    const blogsAtEnd = await Blog.find({});
    assert.strictEqual(blogsAtEnd.length, blogsAtStart.length - 1);

    const ids = blogsAtEnd.map((b) => b.id);
    assert.ok(!ids.includes(blogToDelete.id));
  });

  test("A blog likes can be updated", async () => {
    const blogsAtStart = await Blog.find({});
    const blogToUpdate = blogsAtStart[0];

    const updatedBlogData = {
      title: "Updated Title",
      author: "Updated Author",
      url: "http://updatedurl.com",
      likes: 193,
    };

    const res = await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send(updatedBlogData)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    assert.strictEqual(res.body.likes, updatedBlogData.likes);

    const updatedBlogInDb = await Blog.findById(blogToUpdate.id);
    assert.strictEqual(updatedBlogInDb.likes, updatedBlogData.likes);
  });
});
