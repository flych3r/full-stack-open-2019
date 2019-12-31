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

export const showNotification = (message, duration) => {
  return  dispatch => {
    dispatch({
      type: 'NOTIFY',
      data: message
    })
    setTimeout(() => {
      dispatch(hideNotification());
  }, duration * 1000)
  }
}

export const hideNotification = () => {
  return {
    type: 'UNNOTIFY'
  }
}

export default notificationReducer
