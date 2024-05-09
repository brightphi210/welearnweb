import React from 'react'

import './Waitlist.css';

export const Waitlist = () => {
  return (
    <div className='waitlist section__padding' id='waitlist'>
        <h1>Join our waitlist</h1>
        <p>Join our waitlist by dropping your name and email to<br/> get further information</p>
        <input type="text" placeholder='Full Name' />
        <input type="text" placeholder='Email' />
        <button>Submit</button>
    </div>
  )
}