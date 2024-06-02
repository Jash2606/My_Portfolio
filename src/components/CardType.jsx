import React from 'react'
import './CardTypeStyle.css'
function CardType({header , subheader, img, text, link , linktext , position }) {
  return (
    <div className={`tile ${position}`}>
        <div className='img-parent'>
            <img src={img} alt='title-img' />
        </div>
        <div className='text-parent'>
            {header ? (<h2>{header}</h2>) : ""}
            <h3>{subheader}</h3>
            <div className='cardtext'> 
                {text}
            </div>
            <div className='link-parent'>
                <a href={link} className='link'>{linktext}</a>
            </div>
        </div>
    </div>
  )
}

export default CardType