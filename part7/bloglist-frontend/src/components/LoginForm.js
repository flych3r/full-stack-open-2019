import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'

const LoginForm = (props) => {
  const loginToAplication = (event) => {
    event.preventDefault()
    const user = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    props.loginUser(user)
    event.target.username.value = ''
    event.target.password.value = ''
  }

  return (
    <div>
      <h2>log in to application</h2>
      <form onSubmit={loginToAplication}>
        <div>
            username
          <input name="username" />
        </div>
        <div>
            password
          <input name="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
}

export default connect(
  null,
  { loginUser },
)(LoginForm)
