import React from 'react'
import { AdmCardSt } from './adminPanel-styled'
import { PropTypes } from 'prop-types'

const AdmCard = (props) => (
  <AdmCardSt>
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <span>{props.author}</span>
    <span>
      {/* {ReactHtmlParser(props.content)} */}
    </span>
    <div>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  </AdmCardSt>
)

AdmCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
}

export default AdmCard
