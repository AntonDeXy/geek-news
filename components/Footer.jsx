import React from 'react'
import heart from '../static/icons/heart-solid.svg'
import coffee from '../static/icons/coffee-solid.svg'

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div><a href="https://geek-news-zeit.antondexy.now.sh/">geek-news-zeit.antondexy.now.sh</a></div>
        <div className='madeWith'><span>Made with <img src={heart} alt="heart"/> & <img src={coffee} alt=""/> </span></div>
      </div>
    </footer>
  )
}

export default Footer