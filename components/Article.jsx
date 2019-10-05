import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment'
import Loader from './common/Loader';

const Article = ({ article }) => {
  if (article) {
    return (
      <main>
        <div className="article">
          <div className="img">
            <img src={article.imgUrl} alt="" />
          </div>
          <div className="articleInfo">
            <h1>{article.title}</h1>
            <div className='otherInf'>
              <span>
                author: {article.author}
              </span>
              <span>
                date: <Moment format="dddd HH:mm DD-MM-YYYY">{article.date}</Moment>
              </span>
              <span>
                category: {article.category}
              </span>
            </div>
            <span>{ReactHtmlParser(article.content)}</span>
          </div>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Loader />
    </main>
  )

}

export default Article