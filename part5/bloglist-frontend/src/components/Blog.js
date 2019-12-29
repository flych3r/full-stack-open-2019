import React from 'react'

const Blog = ({ blog }) => (
  <div>
    Title: {blog.title} Author: {blog.author} Likes: {blog.likes}
  </div>
)

export default Blog
