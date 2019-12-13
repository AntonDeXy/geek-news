import React, { useState } from 'react'
import Link from 'next/link'
import { WrapperSt, HeaderSt, MenuIcon } from './elements/Header-styled'
import menu from '../static/icons/menu.svg'
import styled from '@emotion/styled'

const Header = props => {
  const [menuStatus, setMenuStatus] = useState(false)
  const [user, setUser] = useState('unset')

  if (typeof window !== 'undefined' && user === 'unset') {
    setUser(JSON.parse(localStorage.getItem('user')))
  }

  const Links = styled.div`
    @media (max-width: 768px) {
      display: ${menuStatus ? 'grid' : 'none'} !important;
      grid-template-columns: 100%;
      grid-auto-rows: auto;
      grid-auto-flow: row;
      background-color: #383838;
      justify-self: right;
      grid-column: 1/3;
      margin-right: 25px;
      a {
        display: block;
      }
    }
    display: grid;
    column-gap: 15px;
    text-align: right;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    text-align: right;
  `
  const LogOut = () => {
    localStorage.removeItem('user')
  }

  const menuIsActive = () => {
    if (menuStatus) {
      setMenuStatus(false)
    } else {
      setMenuStatus(true)
    }
  }
  return (
    <>
      <HeaderSt>
        <WrapperSt>
          <Link href="/">
            <a className="logo">Geek News</a>
          </Link>
          <MenuIcon onClick={menuIsActive} src={menu} alt="" />
          <Links className="links">
            <Link href="/">
              <a>News</a>
            </Link>
            {user && user.isAdmin && (
              <Link href="/admin-panel">
                <a>Admin Panel</a>
              </Link>
            )}
            {user && !user.isAdmin && (
              <Link href="/create-article">
                <a>Create Article</a>
              </Link>
            )}
            {user && <Link href="/user">Personal Cabinet</Link>}
            {/* <Link > */}
            <a href="https://github.com/AntonDeXy/geek-news">GitHub Page</a>
            {/* </Link> */}
            {user ? (
              <Link href="/login">
                <a onClick={LogOut}>LogOut</a>
              </Link>
            ) : (
              <Link href="/login">
                <a>Login</a>
              </Link>
            )}
          </Links>
        </WrapperSt>
      </HeaderSt>
    </>
  )
}

export default Header
