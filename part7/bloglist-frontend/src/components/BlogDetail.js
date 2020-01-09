import React from 'react'
import PropTypes from 'prop-types'
import { blogType } from '../types'

const BlogDetail = ({
  blog, username, likeBlog, removeBlog,
}) => {
  const removeButton = () => (
    <button type="button" value={JSON.stringify(blog)} onClick={removeBlog}>remove</button>
  )

  return (
    <div className="blog-detail">
      <h5>{blog.title}</h5>
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
}

BlogDetail.propTypes = {
  blog: blogType.isRequired,
  username: PropTypes.string,
  likeBlog: PropTypes.func.isRequired,
  removeBlog: PropTypes.func.isRequired,
}

BlogDetail.defaultProps = {
  username: '',
}

export default BlogDetail
