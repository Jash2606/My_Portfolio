import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgComp from '../components/HeroImgComp'
import contactimg from '../images/contact.avif'
import Form  from '../components/Form.js'
const contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgComp
        img = {contactimg}
        heading= "Contact me"
        text= "Let's Connect and Build Something Great Together!"
        />
        <Form />
      <Footer />
    </div>
  )
}

export default contact