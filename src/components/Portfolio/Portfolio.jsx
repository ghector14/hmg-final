import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/skull.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Hectorslibrary" />
          </div>
          <h3>93Books</h3>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Web app" />
          </div>
          <h3>Imua Athletics</h3>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Web app" />
          </div>
          <h3>Random Map Generator</h3>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Web app" />
          </div>
          <h3>Web App</h3>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Web app" />
          </div>
          <h3>Web App</h3>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Web app" />
          </div>
          <h3>Web App</h3>
        </article>
      </div>

    </section>
    
  )
}

export default Portfolio