import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { blogType } from '../types'

const Blog = ({
  blog, username, likeBlog, removeBlog,
}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  return (
    <div style={blogStyle}>
      <div>
        {`${blog.title}${(blog.author ? ` by ${blog.author}` : '')}`}
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: blogType.isRequired,
  username: PropTypes.string,
  likeBlog: PropTypes.func.isRequired,
  removeBlog: PropTypes.func.isRequired,
}

Blog.defaultProps = {
  username: '',
}

export default Blog
