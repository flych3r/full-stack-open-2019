import React, { useState } from 'react'
import PropTypes from 'prop-types'

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

  const [visible, setVisible] = useState(false)

  const removeButton = () => (
    <button type="button" value={JSON.stringify(blog)} onClick={removeBlog}>remove</button>
  )

  const allInfo = () => (
    <div>
      {blog.url}
      <br />
      {blog.likes}
      {' '}
      likes
      <button type="button" value={JSON.stringify(blog)} onClick={likeBlog}>like</button>
      <br />
      added by
      {' '}
      {blog.user ? blog.user.name : 'noone'}
      <br />
      {(blog.user && blog.user.username === username) ? removeButton() : null}
    </div>
  )

  return (
    <div style={blogStyle}>
      <div onClick={() => setVisible(!visible)} onKeyDown={() => setVisible(!visible)}>
        {blog.title}
        {' '}
        by
        {blog.author}
      </div>
      {visible ? allInfo() : null}
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.objectOf(PropTypes.object).isRequired,
  username: PropTypes.string,
  likeBlog: PropTypes.func.isRequired,
  removeBlog: PropTypes.func.isRequired,
}

Blog.defaultProps = {
  username: '',
}

export default Blog
