import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'

const BlogForm = (props) => {
  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value,
    }
    props.createBlog(blogObject)
    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
          title:
        {' '}
        <input name="title" />
        <br />
          author:
        {' '}
        <input name="author" />
        <br />
          url:
        {' '}
        <input name="url" />
        <br />
        <button type="submit">create</button>
        <br />
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired,
}

export default connect(
  null,
  { createBlog },
)(BlogForm)
