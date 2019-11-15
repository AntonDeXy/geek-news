import React from 'react'
import GeneralNew from './GeneralNews'
import { GeneralNews } from '../elements/Main-styled'
import { PropTypes } from 'prop-types'

const MoreNews = (props) => {
  return (
    <>
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
