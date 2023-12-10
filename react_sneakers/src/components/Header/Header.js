import styles from './Header.module.scss';

const Header = ({ openCart }) => {
 return (
  <header className='header p-45'>
   <div className="d-flex justify-between">
    <div className='header-left d-flex align-center'>
     <img width={40} height={40} src='/img/logo.svg' alt='' className="mr-15" />
     <div className="header-info">
      <h3 className="text-uppercase">React Sneakers</h3>
      <p className='color-grey'>Магазин лучших кроссовок</p>
     </div>
    </div>
    <ul className='headerRight d-flex align-center'>
     <li className="d-flex align-center mr-20">
      <img width={18} height={18} src='/img/cart.svg' alt='' onClick={openCart} className={styles.cartOpen} />
      <span>Корзина</span></li>
     <li className="d-flex align-center mr-20">
      <a href="/favorite" className='d-flex mr-10' ><img width={18} height={18} src='/img/favorite_heart.svg' alt='' /></a>
      <span>Избранное</span></li>
     <li className="d-flex align-center">
      <a href="/profile" className='d-flex mr-10' ><img width={18} height={18} src='/img/user_icon.svg' alt='' /></a>
      <span>Профиль</span>
     </li>
    </ul>
   </div>
  </header>
 )
}
export default Header;