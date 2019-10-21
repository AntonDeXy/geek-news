import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminPanel from '../components/adminPanel/adminPanel';
import '../static/style/style.scss'

const adminPanel = () => {
  return (
    <>
      <Header />
      <AdminPanel />
      <Footer />
    </>
  )
}

export default adminPanel