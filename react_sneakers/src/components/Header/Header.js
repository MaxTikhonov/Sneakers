import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = ({ openCart }) => {
 return (
  <header className='header pl-45 pr-45 pb-30 pt-45'>
   <div className="d-flex justify-between">
    <div className={styles.headerLeft}>
     <img width={40} height={40} src='/img/logo.svg' alt='' className="mr-15" />
     <div className="header-info">
      <h3 className="text-uppercase">React Sneakers</h3>
      <p className='color-grey'>Магазин лучших кроссовок</p>
     </div>
    </div>
    <ul className={styles.headerRight}>
     <li className={styles.cartOpen} onClick={openCart} >
      <img width={18} height={18} src='/img/cart.svg' alt='' className='mr-10' />
      <span>Корзина</span></li>
     <li className="d-flex align-center mr-20">
      <Link to="/favorite" className='d-flex align-center' ><img className='mr-10' width={18} height={18} src='/img/favorite_heart.svg' alt='' /><span>Избранное</span></Link>
     </li>
     <li className="d-flex align-center">
      <Link to="/profile" className='d-flex align-center' ><img className='mr-10' width={18} height={18} src='/img/user_icon.svg' alt='' /><span>Профиль</span></Link>

     </li>
    </ul>
   </div>
  </header>
 )
}
export default Header;