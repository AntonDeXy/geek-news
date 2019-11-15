import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "../components/Head"
import ResetPassword from '../components/PersonalPage/ResetPassword'

const App = () => {
  return (
    <>
      <Head title="Reset Password" />
      <Header />
      <ResetPassword />
      <Footer />
    </>
  )
}
export default App
