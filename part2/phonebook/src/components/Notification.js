import React from 'react'

const Notification = ({ message, color }) => {
  if (message === null) {
    return null
  }

  if (color) {
    return (
      <div className="message danger">
        {message}
      </div>
    )
  }

  return (
    <div className="message success">
      {message}
    </div>
  )
}

export default Notification
