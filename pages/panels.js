import React from 'react'
import '../static/style.scss'
import Header from '../components/Header'
import GeneralPage from '../components/GeneralPage'
import Footer from './../components/Footer'
import { Panels } from '../components/Panels'

const addArticlePanel = () => (
  <div>
    <Header />
    <Panels />
    <Footer />
  </div>
)

export default addArticlePanel
