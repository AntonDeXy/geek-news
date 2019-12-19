import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../static/style/style.scss'
import Head from './../components/Head'
import CreateArticle from '../components/createArticlePage/create-article'

const adminPanel = () => {
  return (
    <>
      <Head title="Admin Panel" />
      <Header />
      <CreateArticle />
      <Footer />
    </>
  )
}

export default adminPanel
