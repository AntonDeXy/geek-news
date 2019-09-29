import React, { useState } from "react"
import { Route } from "react-router-dom"
import axios from "axios"
import { useRouter } from "next/router"
import AddArticlePanel from "../../components/Panels/AddArticle"
import '../../static/style.scss'
import Head from '../../components/Head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const addArticlePanel = () => {
  // const router = useRouter()
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