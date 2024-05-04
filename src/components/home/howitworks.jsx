import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import { SlBookOpen } from "react-icons/sl";

import './howitworks.css'
import AppImg from '../media/App.png';

export const Howitworks = () => {
  return (
    <div className='howitworks section__padding'>
      <div className="howitworks-img">
        <img src={AppImg} alt="app" />
      </div>
      <div className='howitworks-content'>
        <div className="hit-header">
        <h2>How It Works</h2>
        </div>
        <div className="hit-content">
          <IoSearchOutline />
          <div className="hit-text">
            <h3>
              Find a Tutor
            </h3>
            <p>
              Browse our database of qualified tutors based on subject, location, availability, and more.
            </p>
          </div>
        </div>
        <div className="hit-content">
          <LuCalendarCheck2 />
          <div className="hit-text">
            <h3>
              Book a Session
            </h3>
            <p>
              Schedule sessions at your convenience and communicate directly with your chosen tutor.
            </p>
          </div>
        </div>
        <div className="hit-content">
          <SlBookOpen />
          <div className="hit-text">
            <h3>
              Learn and Grow
            </h3>
            <p>
              Watch as your child gains confidence and excels academically with personalized support from their tutor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

