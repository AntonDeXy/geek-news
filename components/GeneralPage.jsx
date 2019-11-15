import React, { useState, useEffect } from 'react'
import MoreNews from './GeneralPage/MoreNews'
import Loader from './common/Loader'
import { MainGeneralPageSt } from './elements/Main-styled'
import { get } from '../static/functions'

const GeneralPage = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    get('articles', '', (res) => { setArticles(res) })
  }, [])

  return (
    <MainGeneralPageSt>
      {/* <TopArticlesBlockSt>
        {topArticles.map(topArticle => (<TopArticles key={topArticle.id} article={topArticle} />))}
      </TopArticlesBlockSt> */}
      {articles
        ? <MoreNews articles={articles} />
        : <Loader />
      }
    </MainGeneralPageSt>
  )
}

export default GeneralPage
