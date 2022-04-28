import React from 'react';
import './header.css';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1 id="spinner">Hector M. Gomez</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <HeaderSocial />

        <a href="contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header