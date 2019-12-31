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

export const showNotification = data => {
  return {
    type: 'NOTIFY',
    data,
  }
}

export const hideNotification = () => {
  return {
    type: 'UNNOTIFY'
  }
}

export default notificationReducer
