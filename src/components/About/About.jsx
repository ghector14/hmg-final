import React from 'react';
import './about.css';
import ME from '../../assets/profile.png';
import {FaAward} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import {AiTwotoneFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year </small>
            </article>

            <article className='about__card'>
              <GiSkills className='about__icon'/>
              <h5>Technologies</h5>
              <small>10+ Technologies</small>
            </article>

            <article className='about__card'>
              <AiTwotoneFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            All my life ive had a passion for art and design as well as with different technologies and no better way to combine them, then
            to create amazing UI's!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's chat</a>
        </div>
      </div>
      
    </section>
  )
}

export default About