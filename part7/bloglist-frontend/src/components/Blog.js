import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { blogType } from '../types'

const Blog = ({
  blog, username, likeBlog, removeBlog,
}) => {
  const [visible, setVisible] = useState(true)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const removeButton = () => (
    <button type="button" value={JSON.stringify(blog)} onClick={removeBlog}>remove</button>
  )

  const allInfo = () => (
    <div className="all-info" style={{ display: visible ? 'none' : '' }}>
      {blog.url}
      <br />
      {`${blog.likes} likes`}
      <button type="button" value={JSON.stringify(blog)} onClick={likeBlog}>like</button>
      <br />
      {`added by ${(blog.user ? blog.user.name : 'noone')}`}
      <br />
      {(blog.user && blog.user.username === username) ? removeButton() : null}
    </div>
  )

  return (
    <div style={blogStyle}>
      <div className="title-author" onClick={() => setVisible(!visible)} onKeyDown={() => setVisible(!visible)}>
        {`${blog.title}${(blog.author ? ` by ${blog.author}` : '')}`}
      </div>
      {allInfo()}
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
