import React from 'react';
import { Fade } from 'react-slideshow-image';

import smoothie from './../../images/smoothie.jpeg';
import smoothie1 from './../../images/smoothie1.jpeg';
import smoothie4 from './../../images/smoothie4.jpeg';
import smoothie5 from './../../images/smoothie5.jpeg';
import smoothie6 from './../../images/smoothie6.jpeg';

const fadeImages = [
  smoothie,
  smoothie1,
  smoothie4,
  smoothie5,
  smoothie6
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
 
const FadeShow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container" style={style}>
          <img src={fadeImages[0]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container" style={style}>
          <img src={fadeImages[1]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container" style={style}>
          <img src={fadeImages[2]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container" style={style}>
          <img src={fadeImages[3]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container" style={style}>
          <img src={fadeImages[4]} />
        </div>
      </div>
    </Fade>
  )
}

export default FadeShow;