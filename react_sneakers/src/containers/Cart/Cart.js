import styles from './Cart.module.scss';
import CartItem from '../../components/CartItem/CartItem';
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, removeItem, selectCartArr, selectChosenAmount, minusItem, addItem } from '../../store/cartSlice';

const Cart = (props) => {
 const dispatch = useDispatch();
 const cart = useSelector(selectCart);
 const items = useSelector(selectCartArr);
 const chosenAmount = useSelector(selectChosenAmount);
 const [open, setOpen] = useState(false);
 const [total, setTotal] = useState({ cost: 0, tax: 0 });

 const remove = (event) => {
  dispatch(removeItem(event.target.name))
 }

 const minus = (event) => {
  dispatch(minusItem(event.target.name))
 }

 const add = (event) => {
  if (cart[event.target.name]) {
   dispatch(addItem(cart[event.target.name]))
  }
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
  let count = 0;
  let countTax = 0;
  if (Object.keys(chosenAmount).length !== 0) {
   for (let key in chosenAmount) {
    count += cart[key].price * chosenAmount[key];
   }
   countTax = count / 100 * 5;
  }
  setTotal((prev) => ({ ...prev, cost: count, tax: countTax }))
 }, [cart, items, chosenAmount])


 return (
  <CSSTransition in={open} classNames='animated' timeout={300} unmountOnExit>
   <div className='overlay'>
    <div className={styles.drawer}>
     <h2 className='d-flex justify-between mb-40'>Корзина <img className={styles.cartItem__cross} width={32} height={32} src="/img/cross.svg" alt="" onClick={props.closeCart} /></h2>
     <div className={styles.items}>
      <CartItem data={items} remove={remove} minus={minus} add={add} amount={chosenAmount} />
     </div>
     <div className={styles.cart__totalblock}>
      <ul className={styles.totalblock__info}>
       <li>
        <span>Итого: </span>
        <div className='ml-5 mr-5'></div>
        <b>{total.cost} руб.</b>
       </li>
       <li>
        <span>Налог 5%: </span>
        <div className='ml-5 mr-5'></div>
        <b>{total.tax} руб.</b>
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