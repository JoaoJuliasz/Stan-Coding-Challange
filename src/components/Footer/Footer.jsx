import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

const Footer = () => (
    <div className='footer'>
        <div className='flex footer-infos'>
           <Link to='/'><p>Home</p></Link> 
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Collection Statement</p>
            <p>Help</p>
            <p>Manage Acount</p>
        </div>
        <div className='copy-rigth'>
            <p>CopyRight &copy; 2016 DEMO Straming. All Rigths Reserved</p>
        </div>
        <div className='footer-imgs'>
            <div className='social-imgs'>
                <img src={require('../../assets/facebook-white.svg')} alt="" />
                <img src={require('../../assets/twitter-white.svg')} alt="" />
                <img src={require('../../assets/instagram-white.svg')} alt="" />
            </div>
            <div className='store-imgs'>
                <img src={require('../../assets/app-store.svg')} alt="" />
                <img src={require('../../assets/play-store.svg')} alt="" />
                <img src={require('../../assets/windows-store.svg')} style={{ borderRadius: '10px' }} alt="" />
            </div>
        </div>
    </div>
)

export default Footer;