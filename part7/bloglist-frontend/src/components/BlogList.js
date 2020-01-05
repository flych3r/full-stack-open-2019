import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import { likeBlog, removeBlog } from '../reducers/blogReducer'

const BlogList = (props) => (
  <div>
    {props.blogsToShow.map((blog) => 
      (<Blog key={blog.id} blog={blog} username={props.username}
        likeBlog={() => props.likeBlog(blog)}
        removeBlog={() => props.removeBlog(blog)} />))
    }
  </div>
)

const blogsToShow = (blogs) => (blogs ? blogs.sort((a, b) => b.likes - a.likes) : [])

const mapStateToProps = (state) => ({
  blogsToShow: blogsToShow(state.blogs),
  username: state.user.username,
})

export default connect(
  mapStateToProps,
  { likeBlog, removeBlog },
)(BlogList)
