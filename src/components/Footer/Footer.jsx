import React from 'react';
import './footer.css';
import {FiGithub} from 'react-icons/fi';
import {FiCodepen} from 'react-icons/fi';
import {IoDiamondOutline} from 'react-icons/io5';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaXTwitter} from "react-icons/fa6";
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>hmg</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#Testimonials'>Testimonials</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/ghector14"><FiGithub/></a>
        <a href="https://codepen.io/ghector14"><FiCodepen/></a>
        <a href="https://diamondapp.com/u/ghector14?feedTab=New"><IoDiamondOutline/></a>
        <a href="https://www.linkedin.com/in/hector-gomez-374a19158/"><FaLinkedinIn/></a>
        <a href="https://www.instagram.com/ghector14/"><BsInstagram/></a>
        <a href="https://twitter.com/gomezhector62"><FaXTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; hmg, All rights reserved.</small>
      </div>


    </footer>
  )
}

export default Footer
