import React from 'react'
import PropTypes from 'prop-types'

const LogoutForm = ({ handleLogout }) => (
  <button type="submit" onClick={handleLogout}>logout</button>
)

LogoutForm.propTypes = {
  handleLogout: PropTypes.func.isRequired,
}

export default LogoutForm
