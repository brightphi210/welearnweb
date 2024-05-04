import React from 'react'

import './service.css';
import WhiteHeader from '../media/WELEARN.png';

 export const Service = () => {
  return (
    <div className="service section__padding">
      <div className="first-role">
        <div className="service-box1">
          <h2>Convenience</h2>
          <p>Busy parents often struggle to find the time to search for qualified tutors. Our app streamlines the process, allowing them to easily browse and book tutors who fit their child's needs and schedule.</p>
          <img src={WhiteHeader} alt="white header" />
        </div>        
        <div className="service-box2">
          <h2>Quality Assurance</h2>
          <p>Parents want the assurance that their child is receiving quality education. Our rigorous vetting process ensures that all tutors are highly qualified professionals, giving parents peace of mind.</p>
          <img src={WhiteHeader} alt="white header" />
        </div>        
        <div className="service-box3">
          <h2>Access to Clients</h2>
          <p>Tutors on our app gain access to a pool of potential clients actively seeking tutoring services. This increases their visibility and opportunities to secure tutoring sessions.</p>
          <img src={WhiteHeader} alt="white header" />
        </div>
      </div>
        <div className="second-role">
          <div className="service-box4">
          <div className='box-width'>
            <h2>Professional Growth</h2>
            <p>Our platform fosters professional growth by allowing tutors to showcase their expertise and build a reputation based on positive feedback from satisfied clients.</p>
            <img src={WhiteHeader} alt="white header" />
          </div>
        </div>        
        <div className="service-box5">
          <div className="box-width">
            <h2>Seamless Payment</h2>
            <p>Enjoy hassle-free payments for tutoring sessions with our secure and seamless payment system. Focus on your child's learning journey while we handle the transactions effortlessly.</p>
            <img src={WhiteHeader} alt="white header" />
          </div>
        </div>
        </div>
    </div>  
    )
}
