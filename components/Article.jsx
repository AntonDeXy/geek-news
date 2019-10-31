import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment'
import Loader from './common/Loader';
import { ArticleSt, Img, ArticleInfo, OtherInf, MainSt } from './elements/Main-styled';

const Article = ({ article }) => {
  if (article) {
    return (
      <MainSt>
        <ArticleSt>
          <div className="img">
            <Img src={article.imgUrl} alt="" />
          </div>
          <ArticleInfo>
            <h1>{article.title}</h1>
            <OtherInf>
              <span>
                author: {article.author}
              </span>
              <span>
                date: <Moment format="dddd HH:mm DD-MM-YYYY">{article.date}</Moment>
              </span>
              <span>
                category: {article.category}
              </span>
            </OtherInf>
            <div>{ReactHtmlParser(article.content)}</div>
          </ArticleInfo>
        </ArticleSt>
      </MainSt>
    )
  }
  return (
    <main>
      <Loader />
    </main>
  )
}

export default Article