import React, { useState } from "react"
import Link from "next/link"
import { WrapperSt, HeaderSt, A } from "./elements/Header-styled"
import menu from '../static/icons/menu.svg'
import styled from '@emotion/styled'

const Header = props => {
  const [menuStatus, setMenuStatus] = useState(false)
  
  const Links = styled.div `
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
            <A className="logo">
              <h1 className="logo">Geek News</h1>
            </A>
          </Link>

          <MenuIcon onClick={menuIsActive} src={menu} alt="" />
          <Links className="links">
            <Link href="#">
              <A>Новости</A>
            </Link>
            <Link href="#">
              <A>Личный кабинет</A>
            </Link>
            <Link href="#">
              <A>Вход</A>
            </Link>
          </Links>
        </WrapperSt>
      </HeaderSt>
    </>
  )
}

export default Header
