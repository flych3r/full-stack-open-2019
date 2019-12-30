import React from 'react'

const Notification = ({ message, errorType }) => {
  if (message === null) {
    return null
  }

  if (errorType)
    return (
      <div className="notification error">
        {message}
      </div>
    )

  return (
    <div className="notification success">
      {message}
    </div>
  )
}

export default Notification
