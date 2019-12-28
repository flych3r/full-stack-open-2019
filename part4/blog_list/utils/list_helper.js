const _ = require('lodash')

const dummy = () => {
  return 1
}

const totalLikes = blogs => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = blogs => {
  if (blogs.length === 0)
    return undefined
  const blog = [...blogs].sort((a, b) => b.likes - a.likes)[0]
  return { author: blog.author, title: blog.title, likes: blog.likes }
}

const mostBlogs = blogs => {
  const blogCounts = _(blogs)
    .groupBy('author')
    .map((author, name) => ({
      author: name,
      blogs: author.length
    }))
    .value()
  return _.maxBy(blogCounts, 'blogs')
}

const mostLikes = blogs => {
  const blogLikes = _(blogs)
    .groupBy('author')
    .map((author, name) => ({
      author: name,
      likes: _.sumBy(author, 'likes'),
    }))
    .value()
  return _.maxBy(blogLikes, 'likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
