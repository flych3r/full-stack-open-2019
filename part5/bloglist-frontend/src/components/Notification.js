import React from 'react'

const Notification = ({ message, color }) => {
  if (message === null) {
    return null
  }

  const notificationStyle = {
    color: color,
    background: 'lightgray',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification
