import React from 'react'
import s from './Header.module.scss'

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className={s.head}>
            <div className={s.logo}>
                <img src="./logo.png" alt="" />
            </div>
                <div className={s.links}>
                    <nav>
                        <a href="">Home</a>
                        <a href="">Projects</a>
                        <a href="">Art</a>
                        <a href="">All about us</a>

                    </nav>

                </div>
                <button className={s.btn}>Contact</button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header