import React from 'react'
import './NewFooterStyle.css';
import Footer from './Footer';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk , FaPhone} from 'react-icons/fa';

const NewFooter = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <h3> Designed and Developed by Jash  </h3>
            </div>

            <div className='middle'>
                <h3> Copyright@2024 </h3>
            </div>

            <div className='symbols'>
                <a href='https://www.instagram.com/jashsavaliya?igsh=MW42MG90Y2Q0bTh2cw=='>
                    <FaInstagram size={20} style={{color:"#fff", marginRight:"1rem"}}/>  
                </a>
                < a href="https://github.com/Jash2606">
                    <FaGithub size={20} style={{color:"#fff", marginRight:"1rem"}} />
                </a>
                <a href="https://www.linkedin.com/in/jash-savaliya-7b0b3b1b3/">
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                </a>
                <a href="mailto:jashsavaliya73@gmail.com">
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default NewFooter