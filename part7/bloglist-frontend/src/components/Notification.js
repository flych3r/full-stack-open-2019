import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ message, color }) => {
  if (message === null) {
    return null
  }

  const notificationStyle = {
    color,
    background: 'lightgray',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
}

Notification.defaultProps = {
  message: null,
  color: 'black',
}

export default Notification
