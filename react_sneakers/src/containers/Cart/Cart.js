import styles from './Cart.module.scss';
import CartItem from '../../components/CartItem/CartItem';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, removeItem, selectCartArr } from '../../store/cartSlice';

const Cart = (props) => {
 const dispatch = useDispatch();
 const cart = useSelector(selectCart);
 const items = useSelector(selectCartArr);
 const [open, setOpen] = useState(false);

 const remove = (event) => {
  dispatch(removeItem(event.target.name))
 }

 useEffect(() => {
  if (props.open === true) {
   setOpen(true)
  }
  else {
   setOpen(false)
  }
 }, [props.open])

 useEffect(() => {
 }, [cart])

 useEffect(() => {
 }, [items])

 return (
  <CSSTransition in={open} classNames='animated' timeout={300} unmountOnExit>
   <div className='overlay'>
    <div className={styles.drawer}>
     <h2 className='d-flex justify-between mb-40'>Корзина <img className={styles.cartItem__cross} width={32} height={32} src="/img/cross.svg" alt="" onClick={props.closeCart} /></h2>
     <div className={styles.items}>
      <CartItem data={items} remove={remove} />
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