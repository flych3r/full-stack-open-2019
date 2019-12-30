import React from 'react'
import PropTypes from 'prop-types'

const LogoutForm = ({ onClick }) => (
  <button type="submit" onClick={onClick}>logout</button>
)

LogoutForm.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default LogoutForm
