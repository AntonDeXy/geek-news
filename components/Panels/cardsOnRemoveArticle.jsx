import React from 'react'
import img from '../../static/code.jpg'

const CardOnRemoveArticle = (props) => {
  return (
    <div onClick={props.setArticleId(props._id)} className="card">
      <img src={props.imgUrl} alt="" />
      <h4>{props.title}</h4>
    </div>
  )
}

export default CardOnRemoveArticle