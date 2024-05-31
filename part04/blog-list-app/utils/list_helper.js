const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => {
        return sum + blog.likes;
      }, 0);
};

const favoriteBlog = (blogs) => {
  return blogs.reduce((currentBlog, blog) => {
    return currentBlog.likes > blog.likes ? currentBlog : blog;
  }, blogs[0]);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
