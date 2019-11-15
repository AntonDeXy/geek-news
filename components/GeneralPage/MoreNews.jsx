import React from 'react'
import GeneralNew from './GeneralNews'
import { MoreNewsSt, GeneralNews } from '../elements/Main-styled'
import { PropTypes } from 'prop-types'

const MoreNews = (props) => {
  return (
    <>
      <MoreNewsSt>
        <h3>News</h3>
        <hr className="more-news-line" />
      </MoreNewsSt>
      <GeneralNews>
        {props.articles.map(article =>
          <GeneralNew key={article._id} article={article} />
        )}
      </GeneralNews>
    </>
  )
}

MoreNews.propTypes = {
  articles: PropTypes.object
}

export default MoreNews
