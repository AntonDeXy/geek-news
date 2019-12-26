import React, { useState, useEffect } from 'react'
import MoreNews from './GeneralPage/MoreNews'
import Loader from './common/Loader'
import { MainGeneralPageSt, MoreNewsSt } from './elements/Main-styled'
import { get } from '../static/functions'
import ReactPaginate from 'react-paginate'

const GeneralPage = () => {
  const [articles, setArticles] = useState(null)
  const [articlesForRender, setArticlesForRender] = useState(null)
  const [currentArticles, setCurrentArticles] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [postsPerPage] = useState(10)
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    if (!articles) {
      get('articles', '', res => {
        setArticles(res)
      })
    }
    if (articles) {
      const temp = articles.sort((a, b) => {
        return a.editDate > b.editDate ? -1 : a.editDate < b.editDate ? 1 : 0
      })
      setArticles(temp)
      setIsSorted(true)
    }
    if (isSorted && articles && articlesForRender === null) {
      setArticlesForRender(articles.filter(e => e.isChecked === true))
    }

    if (articlesForRender) {
      setCurrentArticles(
        articlesForRender.slice(indexOfFirstPost, indexOfLastPost)
      )
    }
  }, [articles, articlesForRender, currentPage, isSorted])

  const indexOfLastPost = currentPage * postsPerPage + 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  return (
    <MainGeneralPageSt>
      {/* <TopArticlesBlockSt>
        {topArticles.map(topArticle => (<TopArticles key={topArticle.id} article={topArticle} />))}
      </TopArticlesBlockSt> */}
      <MoreNewsSt>
        <h3>News</h3>
        <hr className="more-news-line" />
      </MoreNewsSt>
      {currentArticles ? (
        <>
          <ReactPaginate
            onPageChange={e => setCurrentPage(e.selected)}
            pageCount={articlesForRender.length / postsPerPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
          />
          <MoreNews articles={currentArticles} />
          <ReactPaginate
            onPageChange={e => setCurrentPage(e.selected)}
            pageCount={articlesForRender.length / postsPerPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
          />
        </>
      ) : (
        <Loader />
      )}
    </MainGeneralPageSt>
  )
}

export default GeneralPage
