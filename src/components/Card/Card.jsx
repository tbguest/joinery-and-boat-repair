import React from 'react'
import * as classes from './Card.module.css'

export const Card = ({ imageUrl, title, body }) => {
  return (
      <div className={classes.container}>
          {/* <div className={classes.image_container}> */}
          <img src={imageUrl} alt={' '} className={classes.image}/>
          {/* </div> */}
          {/* <div className={classes.content_container}> */}
          <h3>{title}</h3>
          <div className={classes.card_body}>
              <p>{body}</p>
          </div>
          {/* </div> */}
      </div>
  )
}
