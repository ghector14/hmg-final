import React from 'react';
import './nav.css';
import {IoMdHome} from 'react-icons/io';
import {CgUser} from 'react-icons/cg';
import {GiSkills} from 'react-icons/gi';
import {GiBurningBook} from 'react-icons/gi';
import {SiMinutemailer} from 'react-icons/si';
import {useState} from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoMdHome/></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><CgUser/></a>
      <a href="#skills" onClick={() => setActiveNav('skills')} className={activeNav === 'skills' ? 'active' : ''}><GiSkills/></a>
      <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><GiBurningBook/></a>
      <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><SiMinutemailer/></a>
    </nav>
  )
}

export default Nav