import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import './footer.css';
import Logo from '../media/WELEARN png.png'
import AppImg from '../media/App.png';
import Playstore from '../media/Playstore.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-download">
            <div className="footer-download-text">
                <h1>Download Welearn App</h1>
                <div className="text-buttons">
                    <button><FaApple size={25} /> App Store</button>
                    <button><img src={Playstore} alt='' /> Play Store</button>
                </div>
            </div>
            <div className="footer-download-img">
                <img src={AppImg} alt="App" />
            </div>
        </div>
        <div className='footer-main section__padding'>
            <div className="footer-main-text">
                <img src={Logo} alt="welearn logo" />
                <h1>Take your skillset  to new dimensions</h1>
                <p>Let us unleash your creativity and <br/> expertise to create solutions to problems.</p>
            </div>
            <div className='footer-main-lower'>
                <div className="lower-links">
                    <ul>
                        <li><FaFacebook color='var(--color-white)' /></li>
                        <li><FaXTwitter color='var(--color-white)' /></li>
                        <li><FaInstagram color='var(--color-white)' /></li>
                        <li><FaLinkedinIn color='var(--color-white)' /></li>
                    </ul>
                </div>
                <div className="lower-copyright">
                    <span>© 2024 Menti. All rights reserved.</span>
                </div>
                <div className='lower-logo'>
                    <img src={Logo} alt="welearn logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

