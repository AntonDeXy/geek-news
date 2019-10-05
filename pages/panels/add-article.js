import React, { useState } from "react"
import AddArticlePanel from "../../components/Panels/AddArticle"
import '../../static/style/style.scss'
import Head from '../../components/Head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const addArticlePanel = () => {
  return (
    <>
      <Head/>
      <Header />
      <AddArticlePanel />
      <Footer />
    </>
  )
}

export default addArticlePanel