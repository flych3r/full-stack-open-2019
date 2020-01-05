import React from 'react'
import PropTypes from 'prop-types'
import { formType } from '../types'

const LoginForm = ({
  username, password, onSubmit,
}) => (
  <div>
    <h2>log in to application</h2>
    <form onSubmit={onSubmit}>
      <div>
          username
        <input {...username} reset="" />
      </div>
      <div>
          password
        <input {...password} reset="" />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
)

LoginForm.propTypes = {
  username: formType.isRequired,
  password: formType.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default LoginForm
