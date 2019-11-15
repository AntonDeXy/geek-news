import React from 'react'
import '../static/style/style.scss'
import Header from '../components/Header'
import GeneralPage from '../components/GeneralPage'
import Footer from './../components/Footer'
import Head from './../components/Head'

const App = () => {
  return (
    <>
      <Head title="General Page" />
      <Header />
      <GeneralPage />
      <Footer />
    </>
  )
}
export default App
