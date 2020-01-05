import loginService from '../services/login'
import blogService from '../services/blogs'

const loginReducer = ( state = null , action) => {
  switch (action.type) {
  case 'LOGIN':
    window.localStorage.setItem('loggedBlogappUser', JSON.stringify(action.data))
    blogService.setToken(action.data.token)
    return action.data
  case 'RESTORE':
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)

      blogService.setToken(user.token)
      return user
    }
    return null
  case 'LOGOUT':
    window.localStorage.clear()
    blogService.removeToken()
    return null
  default:
    return state
  }
}

export const loginUser = ({ username, password }) => async (dispatch) => {
  const user = await loginService.login({ username, password })
  dispatch({
    type: 'LOGIN',
    data: user,
  })
}

export const restoreUser = () => async (dispatch) => {
  dispatch({
    type: 'RESTORE',
  })
}

export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
  })
}

export default loginReducer
