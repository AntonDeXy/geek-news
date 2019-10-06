import React, { useState } from "react"
import Link from "next/link"
import styled from 'styled-components'

const HeaderSt = styled.header`
  display: grid;
  color: white;
  background-color: #383838;
  width: 100%;
  height: 10vh;
  justify-content: center;
`
const WrapperSt = styled.div `
  display: grid;
  width: 90vw;
  grid-template-columns: auto 20%;
  align-items: center;
`

const A = styled.a `
  align-self: center;
  text-decoration: none;
  color: white;
  font-family: 'Squada One', cursive;
`

const Links = styled.div `
  display: grid;
  text-align: right;
  grid-template-columns: repeat(4, auto);
  text-align: right;
`
const Header = props => {
  return (
    <>
      <HeaderSt>
        <WrapperSt>
          <Link href="/">
            <A className="logo">
              <h1 className="logo">Geek News</h1>
            </A>
          </Link>
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

export default Header;
