import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment'
import Loader from './common/Loader'
import { ArticleSt, Img, ArticleInfo, OtherInf, MainSt } from './elements/Main-styled'
import { PropTypes } from 'prop-types'

const Article = (props) => {
  if (props.article) {
    return (
      <MainSt>
        <ArticleSt>
          <div className="img">
            <Img src={props.article.imgUrl} alt="" />
          </div>
          <ArticleInfo>
            <h1>{props.article.title}</h1>
            <OtherInf>
              <span>
                author: {props.article.author}
              </span>
              <span>
                date: <Moment format="dddd HH:mm DD-MM-YYYY">{props.article.date}</Moment>
              </span>
              <span>
                category: {props.article.category}
              </span>
            </OtherInf>
            <div>{ReactHtmlParser(props.article.content)}</div>
          </ArticleInfo>
        </ArticleSt>
      </MainSt>
    )
  }
  return (
    <MainSt>
      <Loader />
    </MainSt>
  )
}

Article.propTypes = {
  article: PropTypes.object
}

export default Article
