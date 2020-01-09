import React from 'react'
import { userType } from '../types'

const User = ({ user }) => (
  <tr>
    <td>{`${user.name}`}</td>
    <td>{user.blogs.length}</td>
  </tr>
)

User.propTypes = {
  user: userType.isRequired,
}

export default User
