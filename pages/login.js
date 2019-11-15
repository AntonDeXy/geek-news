import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "./../components/Footer"
import Head from "./../components/Head"
import LoginPanel from '../components/PersonalPage/Login'

const App = () => {
  return (
    <>
      <Head title="General page" />
      <Header />
      <LoginPanel />
      <Footer />
    </>
  )
}
export default App
