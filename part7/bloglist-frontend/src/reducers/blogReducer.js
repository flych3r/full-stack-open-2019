import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'NEW_BLOG':
    return [...state, action.data]
  case 'LIKE_BLOG':
    return state.map((blog) => (blog.id === action.data.id ? action.data : blog))
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
}

export const likeBlog = (blog) => async (dispatch) => {
  const likedBlog = await blogService.update(blog)
  dispatch({
    type: 'LIKE_BLOG',
    data: likedBlog,
  })
}

export const removeBlog = (blog) => async (dispatch) => {
  await blogService.remove(blog)
  dispatch({
    type: 'REMOVE_BLOG',
    data: blog,
  })
}

export const initializeBlogs = () => async (dispatch) => {
  const blogs = await blogService.getAll()
  dispatch({
    type: 'INIT_BLOGS',
    data: blogs,
  })
}

export default blogReducer
