import React from 'react'
import Moment from 'react-moment'
import { AdmCardSt } from './adminPanel-styled';
import ReactHtmlParser from 'react-html-parser';
import edit from '../../static/icons/edit-solid.svg'
import remove from '../../static/icons/trash-alt-regular.svg'

const AdmPanelsCard = (props) => {
  // console.log(props)
  return (
    <AdmCardSt>
      <img className='thumbnail' src={props.imgUrl} alt="" />
      <h2>{props.title}</h2>
      <Moment format="dddd HH:mm DD-MM-YYYY">{props.date}</Moment>
      <span>{props.author}</span>
      <span className='desc'>
        {ReactHtmlParser(props.content)}
      </span>
      <div className='buttons'>
        <img onClick={() => { props.activeEditMode(props._id) }} src={edit} alt=""/>
        <img onClick={() => { props.deleteArticle(props._id) }} src={remove} alt=""/>
      </div>
    </AdmCardSt>
  )
}

export default AdmPanelsCard