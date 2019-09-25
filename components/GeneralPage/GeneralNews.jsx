import React from 'react'
import img from '../../static/code.jpg'

const GeneralNew = ({article}) => {
  return (
    <div className="GeneralNew">
      <div className="img">
        <img src={article.imgUrl} alt=""/>
      </div>
      <div className="articleDesc">
        <h2 className="title">{article.title}</h2>
        <span>{article.content}</span>
      </div>
    </div>
  )
}

export default GeneralNew