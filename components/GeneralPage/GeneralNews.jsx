import React from 'react'
import img from '../../static/code.jpg'
import Link from 'next/link'

const GeneralNew = ({ article }) => {
  return (
    <Link href={`a/${article._id}`}>
      <div className="GeneralNew">
        <div className="img">
          <img src={article.imgUrl} alt="" />
        </div>
        <div className="articleDesc">
          <h2 className="title">{article.title}</h2>
          <hr/>
          <span>{article.content}</span>
        </div>
      </div>
    </Link>
  )
}

export default GeneralNew