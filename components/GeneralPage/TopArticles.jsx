import React from "react";
import img from '../../static/code.jpg'
import Link from 'next/link'

const TopArticles = () => {
  return (
    <Link class="article-link" href="#" target="_blank"><img class="article" src={img} alt=""/></Link>
  )
}

export default TopArticles