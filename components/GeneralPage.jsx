import React, { useState, useEffect } from 'react'
import MoreNews from './GeneralPage/MoreNews'
import Loader from './common/Loader'
import { MainGeneralPageSt, MoreNewsSt } from './elements/Main-styled'
import { get } from '../static/functions'
import Pagination from './Pagination'

const GeneralPage = () => {
  const [articles, setArticles] = useState(null)
  const [articlesForRender, setArticlesForRender] = useState(null)
  const [currentArticles, setCurrentArticles] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  // const [postsPerPage] = useState(10)

  useEffect(() => {
    if (!articles) get('articles', '', (res) => { setArticles(res) })

    if (articles && articlesForRender === null) {
      setArticlesForRender(articles.filter(e => e.isChecked === true))
    }

    if (articlesForRender) {
      setCurrentArticles(articlesForRender.slice(indexOfFirstPost, indexOfLastPost))
    }
  }, [articles, articlesForRender, currentPage])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <MainGeneralPageSt>
      {/* <TopArticlesBlockSt>
        {topArticles.map(topArticle => (<TopArticles key={topArticle.id} article={topArticle} />))}
      </TopArticlesBlockSt> */}
      <MoreNewsSt>
        <h3>News</h3>
        <hr className="more-news-line" />
      </MoreNewsSt>
      {currentArticles
        ? <>
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={articlesForRender.length}
            paginate={paginate}
          />
          <MoreNews articles={currentArticles} />
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={articlesForRender.length}
            paginate={paginate}
          />
        </>
        : <Loader />
      }
    </MainGeneralPageSt>
  )
}

export default GeneralPage
