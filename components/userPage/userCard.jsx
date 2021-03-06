import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faEye } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment'
import { PropTypes } from 'prop-types'

const UserCard = ({ article }) => {
  return (
    <div className="userCard">
      <div className='img'>
        <img src={article.imgUrl} alt=""/>
      </div>
      <span className='title'>{article.title}</span>
      <div className='otherInfo'>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          <Moment format="dddd HH:mm DD-MM-YYYY">{article.date}</Moment>
        </span>
        <br/>
        <span>
          <FontAwesomeIcon icon={faEye} />
          {article.viewers || 'undefined'}
        </span>
      </div>
      {!article.isChecked &&
        <div className="onModeration">
          Your article on moderation
        </div>
      }

    </div>
  )
}

UserCard.propTypes = {
  article: PropTypes.object
}
export default UserCard
