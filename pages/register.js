import React, { useState } from "react"
import "../static/style/style.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "../components/Head"
import RegisterPanel from '../components/PersonalPage/Register'

const App = () => {
  return (
    <>
      <Head title="General page" />
      <Header />
      <RegisterPanel />
      <Footer />
    </>
  )
}
export default App
