import React from 'react'
import '../static/style/style.scss'
import Header from '../components/Header'
import Footer from './../components/Footer'
import Head from './../components/Head'
import UserPage from '../components/userPage/userPage'

const App = () => {
  return (
    <>
      <Head title="User" />
      <Header />
      <UserPage />
      <Footer />
    </>
  )
}
export default App
