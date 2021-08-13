import React from 'react'
import * as classes from '../styles/pages.module.css'
import Layout from '../components/Layout/Layout'
import { Projects } from '../components/Projects/Projects'
import folkboatImg from '../images/20181216_dory.jpg'

function ProjectsPage (props) {
  return (
    <>
      <Layout>
        <div>
        <img src={folkboatImg} alt={' '} className={classes.image}/>
        </div>
        <Projects />
      </Layout>
    </>
  )
}
export default ProjectsPage
