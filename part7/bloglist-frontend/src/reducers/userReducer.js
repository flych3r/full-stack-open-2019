import userService from '../services/users'
// import { showNotification } from './notificationReducer'

const userReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  default:
    return state
  }
}

// export const createBlog = (blog) => async (dispatch) => {
//   const newBlog = await blogService.create(blog)
//   dispatch({
//     type: 'NEW_BLOG',
//     data: newBlog,
//   })
//   const message = `a new blog ${newBlog.title}${(newBlog.author ? ` by ${newBlog.author}` : '')} added`
//   dispatch(showNotification(message, 'green', 5))
// }

// export const likeBlog = (blog) => async (dispatch) => {
//   const likedBlog = await blogService.update(blog)
//   dispatch({
//     type: 'LIKE_BLOG',
//     data: likedBlog,
//   })
//   const message = `blog ${likedBlog.title}${(likedBlog.author ? ` by ${likedBlog.author}` : '')} was liked`
//   dispatch(showNotification(message, 'blue', 5))
// }

// export const removeBlog = (blog) => async (dispatch) => {
//   await blogService.remove(blog)
//   dispatch({
//     type: 'REMOVE_BLOG',
//     data: blog,
//   })
//   const message = `blog ${blog.title}${(blog.author ? ` by ${blog.author}` : '')} was removed`
//   dispatch(showNotification(message, 'yellow', 5))
// }

export const initializeUsers = () => async (dispatch) => {
  const blogs = await userService.getAll()
  dispatch({
    type: 'INIT_USERS',
    data: blogs,
  })
}

export default userReducer
