import React from 'react'
import heart from '../static/icons/heart-solid.svg'
import coffee from '../static/icons/coffee-solid.svg'
import {FooterSt, WrapperSt, Img, A, MadeWith} from './elements/Footer-styled';

const Footer = () => {
  return (
    <FooterSt>
      <WrapperSt className="wrapper">
        <div><A href="https://geek-news-zeit.antondexy.now.sh/">geek-news-zeit.antondexy.now.sh</A></div>
        <MadeWith><span>Made with <Img src={heart} alt="heart"/> & <Img src={coffee} alt=""/> </span></MadeWith>
      </WrapperSt>
    </FooterSt>
  )
}

export default Footer