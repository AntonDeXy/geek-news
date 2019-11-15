import React, { useState, useEffect } from 'react'
import MoreNews from './GeneralPage/MoreNews'
import Loader from './common/Loader'
import { MainGeneralPageSt, MoreNewsSt } from './elements/Main-styled'
import { get } from '../static/functions'
import Pagination from './Pagination'

const GeneralPage = () => {
  const [articles, setArticles] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(2)

  useEffect(() => {
    get('articles', '', (res) => { setArticles(res) })
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  let currentArticles
  if (articles) {
    currentArticles = articles.slice(indexOfFirstPost, indexOfLastPost)
  }
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
            postsPerPage={postsPerPage}
            totalPosts={articles.length}
            paginate={paginate}
          />
          <MoreNews articles={currentArticles} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={articles.length}
            paginate={paginate}
          />
        </>
        : <Loader />
      }
    </MainGeneralPageSt>
  )
}

export default GeneralPage
