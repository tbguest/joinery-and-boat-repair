import React from 'react'
// import * as classes from './components.module.css'
// import { Header, Footer } from '../components'
import { Header, Footer } from '..'

export default function Layout ({ children }) {
  return (
    <div className='app-wrapper'>
      <Header />
        {children}
      <Footer />
    </div>
  )
}
