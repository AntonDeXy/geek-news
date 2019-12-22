import React from 'react'
import Moment from 'react-moment'
import { AdmCardSt } from './adminPanel-styled'
import ReactHtmlParser from 'react-html-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { PropTypes } from 'prop-types'

const AdmPanelsCard = (props) => {
  return (
    <AdmCardSt>
      <div className="thumbnail">
        <img src={props.imgUrl} alt="" />
      </div>
      <h2>{props.title}</h2>
      <Moment format="dddd HH:mm DD-MM-YYYY">{props.date}</Moment>
      <span className="author">{props.author}</span>
      <span style={{ color: props.isChecked ? 'green' : 'red' }} className='IsModerated'>{props.isChecked ? 'Moderated' : 'It isn`t moderated'}</span>
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

AdmPanelsCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  _id: PropTypes.string,
  deleteArticle: PropTypes.func,
  activeEditMode: PropTypes.func,
  isChecked: PropTypes.bool
}
export default AdmPanelsCard
