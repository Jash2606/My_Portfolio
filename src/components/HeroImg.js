import './HeroImgStyles.css';
import React from 'react'
import IntroImg from '../images/intro-bg.jpeg'
import { Link } from 'react-router-dom';
import Typing from '../components/Typing'

 function HeroImg(){
   return (
     <div className='hero'>
        <div className='mask'>
             <img className='intro-img' src="https://skilledev.com/wp-content/uploads/2022/08/image.png" alt='IntroImg'></img>
        </div>
        <div className='content'>
          <div className='overlay'>
            <Typing text={
              [
                { tag: "p", content: "HI, I'M JASH SAVALIYA." },
                { tag: "h1", content: "Learner and Explorer." }
            ]}/>
          </div>
          <div>
              <Link to='/projects' className='btn'> PROJECTS </Link>
              <Link to='/contact' className='btn btn-light'> CONTACT </Link>
          </div>
        </div>
     </div>
   )
 };
 
 export default HeroImg