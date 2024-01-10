import styles from './Slider.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { images } from './Data.js';
import Carousel from '../../components/Carousel/Carousel.js'

const Slider = () => {
 return (
  <div className={styles.wrapper}>
   <Carousel images={images} />
  </div >
 )
}

export default Slider;