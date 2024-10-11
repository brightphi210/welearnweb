import React from 'react'
import appk from '../media/weApp.apk'
import './Waitlist.css';

export const Waitlist = () => {
  return (
    <div className='waitlist section__padding' id='waitlist'>
        <h1>Join Welearn</h1>
        <p>Join us today to hire professional instructors to handle your kids</p>
        <a href={appk}><button>Download App</button></a>
    </div>
  )
}