import React from 'react';
import './skills.css';
import {ImHtmlFive} from 'react-icons/im';
import {FaCss3} from 'react-icons/fa';
import {SiSass} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {SiJquery} from 'react-icons/si';
import {FaReact}  from 'react-icons/fa';
import {GiSnake} from 'react-icons/gi';
import {FaNodeJs} from 'react-icons/fa';
import {SiPhp} from 'react-icons/si';
import {SiPython} from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills'>
      <h2>Skills & Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrontEnd</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <ImHtmlFive className='experience__details-icon'/>
            <div><small className='text-light'>HTML</small></div>
            </article>
            <article className='experience__details'>
            <FaCss3 className='experience__details-icon'/>
            <div><small className='text-light'>CSS</small></div>
            </article>
            <article className='experience__details'>
            <SiSass className='experience__details-icon'/>
            <div><small className='text-light'>Sass</small></div>
            </article>
            <article className='experience__details'>
            <SiJavascript className='experience__details-icon'/>
            <div><small className='text-light'>Javascript</small></div>
            </article>
            <article className='experience__details'>
            <SiJquery className='experience__details-icon'/>
            <div><small className='text-light'>Jquery</small></div>
            </article>
            <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
            <div><small className='text-light'>React</small></div>
            </article>
          </div>
        </div>
{/********************************************************/}
        <div className='experience_backend'>
        <h3>BackEnd</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <GiSnake className='experience__details-icon'/>
            <div><small className='text-light'>Sanity</small></div>
            </article>
            <article className='experience__details'>
            <FaNodeJs className='experience__details-icon'/>
            <div><small className='text-light'>NodeJs</small></div>
            </article>
            <article className='experience__details'>
            <SiPhp className='experience__details-icon'/>
            <div><small className='text-light'>PHP</small></div>
            </article>
            <article className='experience__details'>
            <SiPython className='experience__details-icon'/>
            <div><small className='text-light'>Python</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills