import React from 'react'
import Moment from 'react-moment'
import { AdmCardSt } from './adminPanel-styled'
import ReactHtmlParser from 'react-html-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
const AdmPanelsCard = (props) => {
  return (
    <AdmCardSt>
      <img className='thumbnail' src={props.imgUrl} alt="" />
      <h2>{props.title}</h2>
      <Moment format="dddd HH:mm DD-MM-YYYY">{props.date}</Moment>
      <span className="author">{props.author}</span>
      <span className='desc'>
        {ReactHtmlParser(props.content)}
      </span>
      <div className='buttons'>
        <FontAwesomeIcon onClick={() => { props.activeEditMode(props._id) }} icon={faEdit} />
        <FontAwesomeIcon onClick={() => { props.deleteArticle(props._id) }} icon={faTrashAlt} />
      </div>
    </AdmCardSt>
  )
}

export default AdmPanelsCard