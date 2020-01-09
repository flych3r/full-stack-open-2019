import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { blogType } from '../types/index'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Toggagle from './Toggable'
import { likeBlog, removeBlog } from '../reducers/blogReducer'

const BlogList = (props) => (
  <div>
    <Toggagle buttonLabel="new blog">
      <BlogForm />
    </Toggagle>
    {props.blogsToShow.map((blog) => (
      <Blog
        key={blog.id}
        blog={blog}
        username={props.username}
        likeBlog={() => props.likeBlog(blog)}
        removeBlog={() => props.removeBlog(blog)}
      />
    ))}
  </div>
)

const blogsToShow = (blogs) => (blogs ? blogs.sort((a, b) => b.likes - a.likes) : [])

const mapStateToProps = (state) => ({
  blogsToShow: blogsToShow(state.blogs),
  username: state.user.username,
})

BlogList.propTypes = {
  blogsToShow: PropTypes.arrayOf(blogType).isRequired,
  username: PropTypes.string.isRequired,
  likeBlog: PropTypes.func.isRequired,
  removeBlog: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  { likeBlog, removeBlog },
)(BlogList)
