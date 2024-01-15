import './Carousel.scss';
import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
 const [current, setCurrent] = useState(0);
 const [autoPlay, setAutoplay] = useState(true);
 let timeOut = null;


 const slideLeft = () => {
  setCurrent(current === 0 ? images.length - 1 : current - 1)
 }

 const slideRight = () => {
  setCurrent(current === images.length - 1 ? 0 : current + 1)
 }

 useEffect(() => {
  timeOut = autoPlay && setTimeout(() => {
   slideRight();
  }, 5000)
 })

 return (
  <><div className="carousel" onMouseEnter={() => { setAutoplay(false); clearTimeout(timeOut) }} onMouseLeave={() => { setAutoplay(true) }}>
   <div className="carouselWrapper">
    {images.map((image, index) => {
     return <div key={index} className={index === current ? 'carouselCard carouselCardActive' : 'carouselCard'}>
      <img className="cardImage" src={image.image} alt="" />
     </div>
    })}
    <div className="carousel_arrow_left" onClick={slideLeft}><img className='arrowLeft' src="./img/arrow-left.svg" alt="arrow" /></div>
    <div className="carousel_arrow_right" onClick={slideRight}><img className='arrowRight' src="./img/arrow-right.svg" alt="arrow" /></div>
    <div className='carousel_pagination'>
     {images.map((_, index) => {
      return <div key={index} className={index === current ? 'pagination_dot pagination_dot-active' : 'pagination_dot'} onClick={() => setCurrent(index)}></div>
     })}
    </div>
   </div>
  </div></>
 )
}

export default Carousel;