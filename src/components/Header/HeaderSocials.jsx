import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {FaCodepen} from 'react-icons/fa';
import {IoDiamondOutline} from 'react-icons/io5';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/ghector14" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://codepen.io/ghector14" target="_blank" rel="noreferrer"><FaCodepen/></a>
        <a href="https://diamondapp.com/u/ghector14?feedTab=New&tab=posts" target="_blank" rel="noreferrer"><IoDiamondOutline/></a>
    </div>
  )
}

export default HeaderSocials