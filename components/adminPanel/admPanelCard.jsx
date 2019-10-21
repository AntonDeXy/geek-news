import React from 'react'
import { Moment } from 'react-moment';
import { AdmCardSt } from './adminPanel-styled';
import ReactHtmlParser from 'react-html-parser';

const AdmPanelsCard = (props) => (
  <AdmCardSt>
    <img src={props.imgUrl} alt="" />
    <h2>{props.title}</h2>
    {/* <Moment format="dddd HH:mm DD-MM-YYYY">{props.date}</Moment> */}
    <span>{props.author}</span>
      <span>
        {ReactHtmlParser(props.content)}
      </span>
    <div>
      <button onClick={() => {props.activeEditMode(props._id)}}>Edit</button>
      <button>Remove</button>
    </div>
  </AdmCardSt>
)

export default AdmPanelsCard