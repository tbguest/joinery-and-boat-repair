import * as React from 'react'
import { Carousel, Body } from '../components'
import Layout from '../components/Layout/Layout'

import '../styles/globals.css'

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Carousel />
        <Body />
      </Layout>
    </>
  )
}

export default IndexPage
