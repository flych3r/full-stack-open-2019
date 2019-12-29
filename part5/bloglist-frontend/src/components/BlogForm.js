import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({
  newTitle, handleTitleChange,
  newAuthor, handleAuthorChange,
  newUrl, handleUrlChange,
  addBlog,
}) => (
  <>
    <h2>create new</h2>
    <form onSubmit={addBlog}>
        title:
      {' '}
      <input value={newTitle} onChange={handleTitleChange} />
      <br />
        author:
      {' '}
      <input value={newAuthor} onChange={handleAuthorChange} />
      <br />
        url:
      {' '}
      <input value={newUrl} onChange={handleUrlChange} />
      <br />
      <button type="submit">create</button>
      <br />
    </form>
  </>
)

BlogForm.propTypes = {
  newTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  newAuthor: PropTypes.string.isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
  newUrl: PropTypes.string.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
  addBlog: PropTypes.func.isRequired,
}

export default BlogForm
