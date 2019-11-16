import React, { useState } from 'react'
import Link from 'next/link'
import { WrapperSt, HeaderSt } from './elements/Header-styled'
import menu from '../static/icons/menu.svg'
import styled from '@emotion/styled'

const Header = props => {
  const [menuStatus, setMenuStatus] = useState(false)

  const Links = styled.div`
  @media (max-width: 768px) {
    display: ${menuStatus ? 'grid' : 'none'} !important;
    grid-template-columns: 100%;
    background-color: #383838;
    justify-self: right;
    grid-column: 1/3;
    margin-right: 25px;
    a {
      display: block;
    }

  }
  display: grid;
  text-align: right;
  grid-template-columns: repeat(4, auto);
  text-align: right;
  `

  const MenuIcon = styled.img`
    @media (max-width: 768px) {
      display: block !important;
    }
    justify-self: right;
    display: none;
    width: 40px;
  `

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
            <a className="logo">
              Geek News
            </a>
          </Link>
          <MenuIcon onClick={menuIsActive} src={menu} alt="" />
          <Links className="links">
            <Link href="/">
              <a>News</a>
            </Link>
            <Link href="/admin-panel">
              <a>Admin Panel</a>
            </Link>
            <Link href="https://github.com/AntonDeXy/geek-news">
              <a>GitHub Page</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Links>
        </WrapperSt>
      </HeaderSt>
    </>
  )
}

export default Header
