import React from 'react'
import * as classes from './Carousel.module.css'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
// import Img1 from '../../images/20181213_184117.jpg'
// import Img2 from '../../images/20190606_190122.jpg'
// import Img3 from '../../images/20191019_133921.jpg'
import Img1 from '../../images/dory1.png'
import Img2 from '../../images/folkboat1.png'
// import Img3 from '../../images/20191019_133921.jpg'

export const Carousel = () => {
  const images = [
    {
      original: Img1
    },
    {
      original: Img2
    }
  ]

  return (
    <div className={classes.container}>
      <ImageGallery
          items={images}
          showBullets={false}
          showThumbnails={false}
          lazyLoad={true}
          showPlayButton={false}
          showFullscreenButton={false}
        />
        {/* <p className={classes.body_text}>Some text about the operation.</p> */}
    </div>
  )
}
