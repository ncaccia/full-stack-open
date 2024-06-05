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
  try {
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
});

module.exports = blogsRouter;
