import React from 'react'
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
