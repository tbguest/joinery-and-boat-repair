import React from 'react'
import * as classes from './Header.module.css'

import Logo from '../../images/logo.png'

import { Link } from 'gatsby'

export const Header = () => {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.logo_container}>
          <Link href="/">
            <a>
              <img src={Logo} alt={'logo'} className={classes.logo} />
            </a>
          </Link>
        </div>
        <ul className={classes.nav_items}>
          <Link href="/projects/">
            <a className={classes.menu_item}>
              <h2>Projects</h2>
            </a>
          </Link>
          <Link href="/services/">
            <a className={classes.menu_item}>
              <h2>Services</h2>
            </a>
          </Link>
          <Link href="/about/">
            <a className={classes.menu_item}>
              <h2>About</h2>
            </a>
          </Link>
          <Link href="/contact/">
            <a className={classes.menu_item}>
              <h2>Contact</h2>
            </a>
          </Link>
        </ul>
      </div>
    </header>
  )
}
