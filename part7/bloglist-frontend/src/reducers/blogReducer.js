import blogService from '../services/blogs'
import { showNotification } from './notificationReducer'

const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'NEW_BLOG':
    return [...state, action.data]
  case 'LIKE_BLOG':
    const likedBlog = action.data
    return state.map((blog) => (blog.id === likedBlog.id ? likedBlog : blog))
  case 'REMOVE_BLOG':
    return state.filter((blog) => blog.id !== action.data.id)
  case 'INIT_BLOGS':
    return action.data
  default:
    return state
  }
}

export const createBlog = (blog) => async (dispatch) => {
  const newBlog = await blogService.create(blog)
  dispatch({
    type: 'NEW_BLOG',
    data: newBlog,
  })
  const message = `a new blog ${newBlog.title}${(newBlog.author ? ` by ${newBlog.author}` : '')} added`
  dispatch(showNotification(message, 'green', 5))
}

export const likeBlog = (blog) => async (dispatch) => {
  const likedBlog = await blogService.update(blog)
  dispatch({
    type: 'LIKE_BLOG',
    data: likedBlog,
  })
  const message = `blog ${likedBlog.title}${(likedBlog.author ? ` by ${likedBlog.author}` : '')} was liked`
  dispatch(showNotification(message, 'blue', 5))
}

export const removeBlog = (blog) => async (dispatch) => {
  await blogService.remove(blog)
  dispatch({
    type: 'REMOVE_BLOG',
    data: blog,
  })
  const message = `blog ${blog.title}${(blog.author ? ` by ${blog.author}` : '')} was removed`
  dispatch(showNotification(message, 'yellow', 5))
}

export const initializeBlogs = () => async (dispatch) => {
  const blogs = await blogService.getAll()
  dispatch({
    type: 'INIT_BLOGS',
    data: blogs,
  })
}

export default blogReducer
