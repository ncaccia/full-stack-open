const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

describe("Total Likes Count", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },
  ];
  const listWithManyblogs = [
    {
      _id: "665889a7c4d0f10fb3ac9ddc",
      title: "Yorkie Passion",
      author: "Mary & bombon",
      url: "https://www.yorkiepassion.com/",
      likes: 150,
    },
    {
      _id: "66588adcc4d0f10fb3ac9de0",
      title: "Nature World News",
      author: "Mr big Dog",
      url: "https://www.natureworldnews.com/animals/",
      likes: 37,
    },
    {
      _id: "66588affc4d0f10fb3ac9de2",
      title: "Wild Hearted",
      author: "Annastasia",
      url: "https://wild-hearted.com/",
      likes: 93,
    },
  ];

  test("When list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  test("When list has more than one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithManyblogs);
    assert.strictEqual(result, 280);
  });
});

describe("Favorite Blog", () => {
  const listOfBlogs = [
    {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5,
    },
    {
      title: "Yorkie Passion",
      author: "Mary & bombon",
      likes: 150,
    },
    {
      title: "Nature World News",
      author: "Mr big Dog",
      likes: 37,
    },
    {
      title: "Wild Hearted",
      author: "Annastasia",
      likes: 93,
    },
  ];

  test("Compare between each blog likes count and find the one whith most", () => {
    const result = listHelper.favoriteBlog(listOfBlogs);
    assert.deepStrictEqual(result, {
      title: "Yorkie Passion",
      author: "Mary & bombon",
      likes: 150,
    });
  });
});
