import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../static/style/style.scss'
import Article from '../../components/Article'
import { useRouter } from 'next/router'
import Head from './../../components/Head'
import { get } from '../../static/functions'

const ArticlePage = (props) => {
  const router = useRouter()
  const id = router.query._id
  const [article, setArticle] = useState(null)

  useEffect(() => {
    (async () => {
      if (router.query._id) {
        get('articles', router.query._id, (res) => { setArticle(res) })
      }
    })()
  }, [router])
  return (
    <>
      <Head title={article ? article.title : 'Article'} />
      <Header />
      <Article article={article} id={id} />
      <Footer />
    </>
  )
}

export default ArticlePage
