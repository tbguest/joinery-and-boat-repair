import React from 'react'
import * as classes from './Header.module.css'

import Logo from '../../images/logo.png'

import { Link } from 'gatsby'

export const Header = () => {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.logo_container}>
          <img src={Logo} alt={'logo'} className={classes.logo} />
        </div>
        <ul className={classes.nav_items}>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/portfolio/">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
