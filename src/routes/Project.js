import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Cardtype from '../components/CardType.jsx'
import Work from '../components/Work.js'
import HeroImgComp from '../components/HeroImgComp.js'

const Project = () => {
    return (
      <div> 
        <Navbar />
        <HeroImg2 />
        {/* <HeroImgComp
          img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcO2SRVqyafjEoYe_fDXhQ0z2PBy-P80FH0Q&s'
          heading= "Projects"
          text= "Some of My Recent Learning"
        /> */}
        <Cardtype 
          header='Hey Google'
          subheader='This is a awesome card'
          img='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          text='This is text card will use to wrote project description and other stuff.'
          link='https://www.google.com'
          linktext='Link'
          position='img-right'
        />
        <Work />
        <Footer />
    </div>
    )
}

export default Project