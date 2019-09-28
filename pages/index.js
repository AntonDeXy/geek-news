import React from 'react'
import '../static/style.scss'
import Header from '../components/Header'
import GeneralPage from '../components/GeneralPage'
import Footer from './../components/Footer'
import { Panels } from '../components/Panels';

const App = () => (
  <div>
    <Header />
    <GeneralPage />
    <Footer />
  </div>
)

export default App
