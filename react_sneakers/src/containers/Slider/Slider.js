import styles from './Slider.module.scss';
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