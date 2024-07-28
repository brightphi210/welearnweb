import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import HeaderImg from '../media/h4-img-1.png';

export const Header = () => {
  const divStyle = {
    background: 'var(--color-navy)',
  };
  return (
    <>
    <div className='header'>
      <div className="header-content">

        <div className="header-text">
          <div className="space"></div>
          <h1>
            <span className='span'>Welearn</span> Empowers <br className='break'/> Your Child's <span className="span">Education</span>  
          </h1>
          <p>Empower your child's education with personalized tutoring experiences. <br className='break'/> 
            Unlock Your Child's Potential with Personalized Tutoring
          </p>
          <button>
            <Link to='/'>Find a Tutor Now</Link>
          </button>
        </div>

        <div className='header-img'>
          <img src={HeaderImg} alt="header img" />
        </div>

      </div>
    </div>  


    <div style={divStyle} className="header-bar">
        <p>About Welearn</p>
    </div>    
    </>
  );
};
