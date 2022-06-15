import React from 'react'
import './App.scss'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Description from './components/Description'
import Services from './components/Services'
import Realizations from './components/Realizations'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Description />
      <Services />
      <Realizations />
      <Contact />
      <Footer />
    </>
  )
}

export default App
