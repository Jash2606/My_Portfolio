import './FormStyle.css';
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label> Your Name </label>
            <input type='text' placeholder='Enter your name' />
            <label> Email </label>
            <input type='email' placeholder='Enter your email' />
            <label> Subject </label>
            <input type='text' placeholder='Enter your Subject' />
            <label> Message </label>
            <textarea rows="6" placeholder='Enter your message Here' />
            <button type='submit' className='btn'> Submit </button>
        </form>
    </div>
  )
}

export default Form