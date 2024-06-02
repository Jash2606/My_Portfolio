import "./FooterStyles.css";
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk , FaPhone} from 'react-icons/fa';

 const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                   <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                   <div>
                        <p> 9/A Panchvati Soc.</p>
                        <p> Surat,Gujarat. </p>
                    </div>  
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    +91 9016828712</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    jashsavaliya73@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p> This is me Jash Savaliya , Curious Learner and Explorer First Year UG Student at Scaler School Of Technology. </p>
                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                    < a href="https://github.com/Jash2606">
                        <FaGithub size={20} style={{color:"#fff", marginRight:"1rem"}} />
                    </a>
                    <a href="https://www.linkedin.com/in/jash-savaliya-7b0b3b1b3/">
                        <FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer