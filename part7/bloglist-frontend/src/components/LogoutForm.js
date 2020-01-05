import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../reducers/loginReducer'

const LogoutForm = (props) => (
  <button type="submit" onClick={props.logoutUser}>logout</button>
)

// LogoutForm.propTypes = {
//   onClick: PropTypes.func.isRequired,
// }

export default connect(
  null,
  { logoutUser },
)(LogoutForm)
