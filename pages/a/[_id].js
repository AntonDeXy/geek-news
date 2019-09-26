import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../static/style.scss'
import Article from '../../components/Article'
import { useRouter } from 'next/router'
import axios from 'axios'

const ArticlePage = (props) => {
  const router = useRouter()
  // console.log(router.query._id)
  const id = router.query._id
  // console.log(id)
  const [article, setArticle] = useState(null)

  useEffect(() => {
      (async () => {
        if (router.query._id) {
          // console.log(router.query._id)
          const res = await axios.get(`https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${router.query._id}`)
          console.log(res.data)
          setArticle(res.data)
        }
      })()
  }, [router])

  return (
    <>
      <Header />
      <Article article={article} id={id} />
      <Footer />
    </>
  )
}

export default ArticlePage