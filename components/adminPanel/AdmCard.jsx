import React from 'react'
import { AdmCardSt } from './adminPanel-styled'
import { Moment } from 'react-moment';

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

export default AdmCard