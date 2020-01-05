const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'NOTIFY':
    return action.data
  case 'UNNOTIFY':
    return null
  default:
    return state
  }
}

export const hideNotification = () => ({
  type: 'UNNOTIFY',
})

export const showNotification = (message, color, duration) => (dispatch) => {
  dispatch({
    type: 'NOTIFY',
    data: { message, color },
  })
  setTimeout(() => {
    dispatch(hideNotification())
  }, duration * 1000)
}

export default notificationReducer
