import React from 'react'

import './About.css';
import AboutImg from '../media/AboutImg.png';
import Arrowup from '../media/Vector 743.png';
import Arrowdown from '../media/Vector 742.png';

export const About = () => {
  return (
    <>
        <div className="about section__padding">
            <div className="about-main">
                <div className="main-img">
                    <img src={AboutImg} alt="About" />
                </div>
                <div className="main-text">
                    <h2>Introducing WeLearn: Your Gateway to Educational Excellence!</h2>
                    <p>At WeLearn, we're dedicated to revolutionizing the way students learn and grow. Our platform is designed to connect passionate tutors with eager learners, fostering a dynamic environment where knowledge flourishes and potential is unleashed.<br/>
                    With a commitment to quality education, WeLearn offers a diverse range of subjects and specialized tutors to cater to every learning need. Whether it's mastering mathematics, delving into literature, or exploring new languages, we have the expertise to guide students toward academic success.<br/>
                    Join us at WeLearn and embark on a transformative educational experience. Together, let's unlock the power of learning and inspire a brighter future. Welcome to WeLearn!</p>
                    <img src={Arrowup} alt="arrowup"  className='break'/>
                    <img src={Arrowdown} alt="arrowdown"  className='break'/>
                </div>
            </div>
            <div className="about-lower">
                <div className="mission">
                    <h1>Mission:</h1>
                    <p>“WeLearn Global aims to create a world where all learners are equipped with the knowledge, skills, and mindset to thrive in an interconnected world."</p>
                </div>
                <div className="vision">
                    <h1>Vision:</h1>
                    <p>"Our vision is to revolutionize global education by fostering a diverse, equitable, and interconnected learning community that shapes a more just and sustainable world."</p>
                </div>
            </div>
        </div>

        <div className="header-bar" id='service'>
            <p>Why Choose Welearn?</p>
        </div>    
    </>
  )
}
