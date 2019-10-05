import React, { useState } from "react"
import { Route } from "react-router-dom"
import axios from "axios"
import { useRouter } from "next/router"
import RemoveArticle from '../../components/Panels/RemoveArticle'
import '../../static/style/style.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Head from '../../components/Head'

const addArticlePanel = () => {
  return (
    <>
      <Head />
      <Header/>
      <RemoveArticle />
      <Footer/>
    </>
  )
}

export default addArticlePanel