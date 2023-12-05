import styles from './Cart.module.scss';
import CartItem from '../../components/CartItem/CartItem';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';

const Cart = (props) => {
 const [open, setOpen] = useState(false);

 useEffect(() => {
  if (props.open === true) {
   setOpen(true)
  }
  else {
   setOpen(false)
  }
 }, [props.open])


 return (
  <CSSTransition in={open} classNames='animated' timeout={300} unmountOnExit>
   <div className='overlay'>
    <div className={styles.drawer}>
     <h2 className='d-flex justify-between mb-40'>Корзина <img className={styles.cartItem__cross} width={32} height={32} src="/img/cross.svg" alt="" onClick={props.closeCart} /></h2>
     <div className={styles.items}>
      <CartItem />
     </div>
     <div className={styles.cart__totalblock}>
      <ul className={styles.totalblock__info}>
       <li>
        <span>Итого: </span>
        <div className='ml-5 mr-5'></div>
        <b>21 498 руб.</b>
       </li>
       <li>
        <span>Налог 5%: </span>
        <div className='ml-5 mr-5'></div>
        <b>1024 руб.</b>
       </li>
      </ul>
      <button className={styles.greenBtn}><span>Оформить заказ</span><img src="/img/arrow_right.svg" alt="" /></button>
     </div>
    </div>
   </div>
  </CSSTransition>
 )
}

export default Cart;