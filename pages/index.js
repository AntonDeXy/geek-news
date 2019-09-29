import React, { useState } from 'react'
import '../static/style.scss'
import Header from '../components/Header'
import GeneralPage from '../components/GeneralPage'
import Footer from './../components/Footer'
import { Panels } from '../components/Panels';
import Head from './../components/Head';

const App = () => {
  const [theme, setTheme] = useState('dark')
  return (
    <>
    <Head title='General page' />
    <Header theme={theme} setTheme={setTheme} />
    <GeneralPage />
    <Footer />
    
  </>
)
}
export default App
