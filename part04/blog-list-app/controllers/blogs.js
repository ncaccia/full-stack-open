const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", async (req, res, next) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

blogsRouter.post("/", async (req, res, next) => {
  const blog = new Blog(req.body);
  if (!blog.title || !blog.url) {
    res.status(400).end();
  }
  if (!blog.likes) {
    blog.likes = 0;
  }
  const savedBlog = await blog.save();
  res.status(201).json(savedBlog);
});

blogsRouter.put("/:id", async (req, res, next) => {
  const { likes } = req.body;
  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    { likes }, // Update only the likes property as request on the 4.14 exercise
    { new: true }
  );
  res.status(200).json(updatedBlog);
});

blogsRouter.delete("/:id", async (req, res, next) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = blogsRouter;
