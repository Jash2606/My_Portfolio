import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Footer2 from '../components/NewFooter.js'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      {/* <Work /> */}
      {/* <Footer /> */}
      <Footer2 />
    </div>
  )
}

export default Home