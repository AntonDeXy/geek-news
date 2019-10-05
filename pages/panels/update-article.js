import React, { useState } from "react"
import '../../static/style/style.scss'
import Head from '../../components/Head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UpdateArticlePanel from './../../components/Panels/UpdateArticle'

const addArticlePanel = () => {
  return (
    <>
      <Head/>
      <Header />
      <UpdateArticlePanel />
      <Footer />
    </>
  )
}

export default addArticlePanel