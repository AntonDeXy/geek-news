import React, { useState } from "react"
import Link from "next/link"
import styled from 'styled-components'
import { WrapperSt, HeaderSt, A, Links } from "./elements/Header-styled"

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
