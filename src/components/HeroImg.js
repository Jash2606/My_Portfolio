import './HeroImgStyles.css';
import React from 'react'
import IntroImg from '../images/intro-bg.jpeg'
import { Link } from 'react-router-dom';
import Typing from '../components/Typing'
let altImage = "https://skilledev.com/wp-content/uploads/2022/08/image.png";

 function HeroImg(){
   return (
     <div className='hero'>
        <div className='mask'>
             <img className='intro-img' src={altImage} alt='IntroImg'></img>
        </div>
        <div className='content'>
          <div className='overlay'>
              <h5> Hellooo, 
                <br></br>I'M JASH SAVALIYA, </h5>
            <Typing text={
              [
                { tag: "p", content: "Developer." },
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