import React from 'react'

const LogoutForm = ({ handleLogout }) => {
  return (
    <button type="submit" onClick={handleLogout}>logout</button>
  )
}

export default LogoutForm
