import React from 'react'
import * as classes from './Projects.module.css'
import { Card } from '../Card/Card'
import doryImg from '../../images/dory1.png'
import folkboatImg from '../../images/folkboat1.png'

const folkboatText = 'Some delightful text. The folkboat came form the Abbott boatyard in Whitby Ontario. Built in 1973. She\'s a bit rough, but a beaut.'

export const Projects = () => {
  return (
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Card imageUrl={doryImg} title='Light Dory' body='Some delightful text.' />
          <Card imageUrl={folkboatImg} title='Folkboat' body='Some delightful text.' />
          <Card imageUrl={doryImg} title='Dory' body='Some delightful text.' />
          <Card imageUrl={doryImg} title='Dory' body={folkboatText} />
        </div>
      </div>
  )
}
