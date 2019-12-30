import React from 'react'
import PropTypes from 'prop-types'
import { formType } from '../types'

const BlogForm = ({
  title, author, url, onSubmit,
}) => (
  <>
    <h2>create new</h2>
    <form onSubmit={onSubmit}>
        title:
      {' '}
      <input {...title} reset="" />
      <br />
        author:
      {' '}
      <input {...author} reset="" />
      <br />
        url:
      {' '}
      <input {...url} reset="" />
      <br />
      <button type="submit">create</button>
      <br />
    </form>
  </>
)

BlogForm.propTypes = {
  title: formType.isRequired,
  author: formType.isRequired,
  url: formType.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default BlogForm
