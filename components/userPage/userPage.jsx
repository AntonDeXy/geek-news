import React, { useState } from 'react'
import { UserPageSt } from './userPageStyled'

const UserPage = () => {
  const [user, setUser] = useState(undefined)
  if (typeof window !== 'undefined' && user === undefined) {
    setUser(JSON.parse(localStorage.getItem('user')))
    // let data = JSON.parse(localStorage.getItem('user'))
    // setUser(data)
  }
  return (
    <UserPageSt>
      {user && user.email}
    </UserPageSt>
  )
}

export default UserPage
