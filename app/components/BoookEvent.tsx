'use client'
import { useState } from 'react'
import React from 'react'

const BookEvent = () => {
const[email,setEmail]=useState('');
const[submitted,setsubmitted]=useState(false);
const handleSubmit=async (e:React.FormEvent)=>{
  e.preventDefault();
  setTimeout(()=>{
    setsubmitted(true);
    setEmail('');
  },1000);
}
  return (
    <div id="book-event">
      {submitted ? (
        <p>Thank for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit} >
            <div>
              <label htmlFor='email'>Email Address</label>
              <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Enter your email address' />
            </div>
            <button type="submit" className='button-submit'>Book Now</button>
        </form>
      )}
    </div>
  )
}

export default BookEvent