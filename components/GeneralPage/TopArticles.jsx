import React from 'react'
import img from '../../static/code.jpg'
import Link from 'next/link'
import { Img, ArticleLink } from '../elements/Main-styled'

const TopArticles = () => {
  return (
    <Link href="#">
      <ArticleLink>
        <Img className="article" src={img} alt="" />
      </ArticleLink>
    </Link>
  )
}

export default TopArticles
