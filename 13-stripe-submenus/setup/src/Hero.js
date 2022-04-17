import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {closeSubmenu}=useGlobalContext();
  return <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className='hero-info'>
        <h1>PayDayEveryDay
        </h1>
        <p>
          Millions of companies want to make thousands of transactions everyday in and out 
          and they chose us aa their trustable partner and so should you.
        </p>
        <button className="btn">
          Start now
        </button>
      </article>
      <article className="hro-images">
        <img src={phoneImg} alt="phone" className='phone-img'/>
      </article>
    </div>
  </section>
}

export default Hero
