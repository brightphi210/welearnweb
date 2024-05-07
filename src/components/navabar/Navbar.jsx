import React, { useState } from 'react';
import { Link , NavLink} from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

import Logo from '../media/WELEARN png.png';
import './Navbar.css'

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar-links_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className='navbar-links_container'>
        <ul className="navbar-links">
          <li className='active'><NavLink to="/">Home</NavLink></li>
          {/* <li className='active'><NavLink to="/">Find A Tutor</NavLink></li>
          <li className='active'><NavLink to="#howitworks">How It Works</NavLink></li>
          <li className='active'><NavLink to="#testimonials">Testimonials</NavLink></li>
          <li className='active'><NavLink to="/">About Us</NavLink></li> */}
          {/* <li className='active'><NavLink to="/">Contact Us</NavLink></li> */}
        </ul>          
        <div className="navbar-download">
            <button>Download App</button>
          </div>
        <div className="navbar-menu">
          <CgMenuLeft color='#00262F' fontSize={35} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className="navbar-menu_container">
              <IoCloseCircle color='#00262F' className='container_close' fontSize={50} onClick={() => setToggleMenu(false)} />
              <div className='navbar-menu_container-links'>
                <ul className="navbar-menu-links">
                  <li><NavLink to="/">Home</NavLink></li>
                  {/* <li><NavLink to="/">Find A Tutor</NavLink></li>
                  <li><NavLink to="#howitworks">How It Works</NavLink></li>
                  <li><NavLink to="#testimonials">Testimonials</NavLink></li>
                  <li><NavLink to="/">About Us</NavLink></li>
                  <li><NavLink to="/">Contact Us</NavLink></li> */}
                </ul>
                <div className="navbar-menu-download">
                  <button>Download App</button>
                </div>            
              </div>
            </div>
          )}
        </div>          
      </div>
    </div>
  )
}

