const _ = require("lodash");

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

//returns the author who has the largest amount of blogs + # of blogs the top author has
const mostBlogs = (blogs) => {
  const blogCounts = _.countBy(blogs, (blog) => blog.author);
  const authorWithMostBlogs = _.maxBy(
    Object.keys(blogCounts),
    (author) => blogCounts[author]
  );

  return {
    author: authorWithMostBlogs,
    blogs: blogCounts[authorWithMostBlogs],
  };
};

//  returns the author, whose blog posts have the largest amount of likes
const mostLikes = (blogs) => {
  const likesPerAuthor = _.mapValues(_.groupBy(blogs, "author"), (group) =>
    _.sumBy(group, "likes")
  );
  const authorWithMostLikes = _.maxBy(
    Object.keys(likesPerAuthor),
    (author) => likesPerAuthor[author]
  );

  return {
    author: authorWithMostLikes,
    likes: likesPerAuthor[authorWithMostLikes],
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
