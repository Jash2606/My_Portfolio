import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import React from 'react'
import img1 from '../images/aboutImg1.jpg'
import img2 from '../images/aboutImg2.jpeg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?
                <span class="shrug-emoji">🤷🏻</span> 
            </h1>
            <p>
                I love learning new things as a software developer. 
                While I'm good at backend development, I'm always eager to learn more about different areas to create cool stuff.
                I am currently looking for new opportunities to work with a team of developers to create amazing web applications.
            </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'> 
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={img1} alt='img1' className='img' />
                </div>
                <div className='img-stack bottom'>
                    <img src={img2} alt='img2' className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent