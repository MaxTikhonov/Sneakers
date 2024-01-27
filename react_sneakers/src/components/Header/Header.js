import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import { useEffect, useState } from 'react';

const Header = ({ openCart, open }) => {
 const [showBurger, setShowBurger] = useState(false);
 const [width] = useWindowSize();

 useEffect(() => {
  setShowBurger(true)
 }, [open])
 const switchBurger = () => {
  if (width > 700 && showBurger) {
   return <ul className={styles.headerRight}>
    <li className={styles.cartOpen} onClick={openCart} >
     <img src='/img/cart.svg' alt='' className='header-icon mr-10' />
     <span>Корзина</span></li>
    <li className="d-flex align-center mr-20">
     <Link to="/favorite" className='d-flex align-center' ><img className='header-icon mr-10' src='/img/favorite_heart.svg' alt='' /><span>Избранное</span></Link>
    </li>
    <li className="d-flex align-center">
     <Link to="/profile" className='d-flex align-center' ><img className='header-icon mr-10' src='/img/user_icon.svg' alt='' /><span>Профиль</span></Link>
    </li>
   </ul>
  }

  else {
   return <div className={styles.menu__wrapper}>
    <input id={styles.menu__toggle} type="checkbox" />
    <label className={styles.menu__btn} htmlFor="menu__toggle">
     <span></span>
    </label>
    <ul className={styles.menu__box}>
     <li className={`${styles.cartOpen} ${styles.menu__item}`} onClick={openCart} >
      <img src='/img/cart.svg' alt='' className='header-icon mr-10' />
      <span>Корзина</span></li>
     <li className={`d-flex align-center mr-20 ${styles.menu__item}`}>
      <Link to="/favorite" className='d-flex align-center' ><img className='header-icon mr-10' src='/img/favorite_heart.svg' alt='' /><span>Избранное</span></Link>
     </li>
     <li className={`d-flex align-center mr-20 ${styles.menu__item}`}>
      <Link to="/profile" className='d-flex align-center' ><img className='header-icon mr-10' src='/img/user_icon.svg' alt='' /><span>Профиль</span></Link>
     </li>
    </ul>
   </div>
  }
 }

 return (
  <header className={styles.header}>
   <div className={styles.header__wrapper}>
    <div className={styles.headerLeft}>
     <img src='/img/logo.svg' alt='' className="mr-15" />
     <div className="header-info">
      <h3 className="text-uppercase">React Sneakers</h3>
      <p className='color-grey'>Магазин лучших кроссовок</p>
     </div>
    </div>
    {switchBurger()}
   </div>
  </header>
 )
}
export default Header;