import './HeroImgCompStyle.css'
import React from 'react'

function HeroImgComp ({img,heading,text}) {
  return (
    <div>
        <div className='hero-img'>
            <img src={img} alt='hero-img' className='img' />
            <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroImgComp
