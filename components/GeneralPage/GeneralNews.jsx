import React from 'react'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'
import { GeneralNewSt, Img, HR, H2, Span } from '../elements/Main-styled'
import Loader from '../common/Loader'
import { PropTypes } from 'prop-types'

const GeneralNew = (props) => {
  if (!props.article) {
    return (
      <Loader />
    )
  }
  return (
    <Link href={`a/${props.article._id}`}>
      <GeneralNewSt className="GeneralNew">
        <Img className='thumbnail' src={props.article.imgUrl} alt="img not found" />
        <div className='ArticleDesc'>
          <H2>{props.article.title}</H2>
          <HR />
          <Span>{ ReactHtmlParser(props.article.content) }</Span>
          <button href={`a/${props.article._id}`} type="button" className="btn btn-secondary">Read more</button>
        </div>
      </GeneralNewSt>
    </Link>
  )
}

GeneralNew.propTypes = {
  article: PropTypes.object
}

export default GeneralNew
