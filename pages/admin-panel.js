import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AdminPanel from '../components/adminPanel/adminPanel'
import '../static/style/style.scss'
import Head from "./../components/Head"

const adminPanel = () => {
  return (
    <>
      <Head title="Admin Panel" />
      <Header />
      <AdminPanel />
      <Footer />
    </>
  )
}

export default adminPanel