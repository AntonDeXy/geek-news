import React from 'react'
import GeneralNew from './GeneralNews'
import { GeneralNews } from '../elements/Main-styled'
import { PropTypes } from 'prop-types'

const MoreNews = (props) => {
  const articlesForRender = props.articles.filter(el => el.isChecked === true)
  return (
    <>
      <GeneralNews>
        {articlesForRender.map(article =>
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
