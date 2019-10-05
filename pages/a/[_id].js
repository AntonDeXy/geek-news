import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../static/style/style.scss'
import Article from '../../components/Article'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from './../../components/Head';

const ArticlePage = (props) => {
  const router = useRouter()
  const id = router.query._id
  const [article, setArticle] = useState(null)

  useEffect(() => {
      (async () => {
        if (router.query._id) {
          // console.log(router.query._id)
          // const res = await axios.get(`http://localhost:3012/articles/${router.query._id}`)
          const res = await axios.get(`https://cors-anywhere.herokuapp.com/geek-news-backend.herokuapp.com/articles/${router.query._id}`)
          console.log(res.data)
          setArticle(res.data)
        }
      })()
  }, [router])
  return (
    <>
      <Head
      //  title={article.title} 
       />
      <Header />
      <Article article={article} id={id} />
      <Footer />
    </>
  )
}

export default ArticlePage