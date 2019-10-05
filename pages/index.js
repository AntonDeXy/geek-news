import React, { useState } from 'react'
import '../static/style/style.scss'
import Header from '../components/Header'
import GeneralPage from '../components/GeneralPage'
import Footer from './../components/Footer'
import { Panels } from '../components/Panels';
import Head from './../components/Head';

const App = () => {
  return (
    <>
    <Head title='General page' />
    <Header />
    <GeneralPage />
    <Footer />
    
  </>
)
}
export default App
