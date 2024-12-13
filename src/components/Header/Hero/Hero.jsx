import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <>
    <section className={s.hero}>
        <div className={s.start}>
            <div className={s.begin}>
                <h4>Architecture design</h4>
                <h1>Professional Interior Design</h1>
                <p>Design for now with the awareness of yesterday and unknown tomorrow.
                Because small details make the perfect design. Helping you choose between good and best.</p>
                <button>Let's work together</button>
            </div>

            <div className={s.finish}>
                <img src="./black.png" alt="" />
            </div>
        </div>

    </section>
    </>
  )
}

export default Hero