import React from 'react'

import { images } from '../../constants';
import './Navbar.scss'

function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" />
      </div>
      
      <ul className="app__navbar-links">
        {[ 'Home', 'About', 'Contact', 'Work', 'Skils' ].map((item) => {
          return (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        })}
      </ul>

    </nav>
  )
}

export default Navbar