import React from 'react'
import { connect } from 'react-redux'
import { notificationType } from '../types'


const Notification = (props) => {
  if (!props.notification) {
    return null
  }

  const notificationStyle = {
    color: props.notification.color,
    background: 'lightgray',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  return (
    <div style={notificationStyle}>
      {props.notification.message}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notification: state.notification,
})

Notification.propTypes = {
  notification: notificationType,
}

Notification.defaultProps = {
  notification: null,
}

export default connect(
  mapStateToProps,
  null,
)(Notification)
