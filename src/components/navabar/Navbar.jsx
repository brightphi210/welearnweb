import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

import Logo from '../media/WELEARN png.png';
import './Navbar.css'
import appk from '../media/welearn.apk'
import appk2 from '../media/welearnnew.apk'

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  // const handleClose = () => {
  //   setToggleMenu((prev) => !prev)
  // }
  return (
    <div className='navbar'>
      <div className="navbar-links_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className='navbar-links_container'>     
          <div className="navbar-download">
            <a href={appk2}><button>Download App</button></a>
          </div>
        <div className="navbar-menu">
          <CgMenuLeft color='#00262F' fontSize={35} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className="navbar-menu_container">
              <IoCloseCircle color='#00262F' className='container_close' fontSize={50} onClick={() => setToggleMenu(false)} />
              <div className='navbar-menu_container-links'>
                <ul className="navbar-menu-links">
                  <li><Link to="/">Home</Link></li>
                  <li className='active'><a href="#service">Why Use Welearn</a></li>
                  <li className='active'><a href="#howitworks">How It Works</a></li>
                  <li className='active'><a href="#testimonials">Testimonials</a></li>
                  <li className='active'><a href="#waitlist">Waitlist</a></li>
                </ul>
                <div className="navbar-menu-download">
                  <a href={appk2}><button>Download App</button></a>
                </div>            
              </div>
            </div>
          )}
        </div>          
      </div>
    </div>
  )
}

