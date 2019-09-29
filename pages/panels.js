import React from 'react'
import '../static/style.scss'
import Header from '../components/Header'
import GeneralPage from '../components/GeneralPage'
import Footer from './../components/Footer'
import Panels from '../components/Panels'
import Head from './../components/Head'

const addArticlePanel = () => (
  <>
    <Head />
    <Header />
    <Panels />
    <Footer />
  </>
)

export default addArticlePanel
