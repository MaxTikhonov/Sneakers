import styles from './CartItem.module.scss';
import { useEffect, useState } from 'react';

const CartItem = ({ data }) => {
 const [cards, setCards] = useState([]);

 useEffect(() => {
  setCards(data);
 }, [data])
 return (

  <div className="cart-item d-flex align-center">
   <img width={70} height={70} src={`/img/sneakers/1.jpg`} alt="Sneaker" className="mr-20" />
   <div className="cart-item__info mr-20">
    <h5>Мужские кроссовки Air Max</h5>
    <b>12 999 руб.</b>
   </div>
   <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" />
  </div>
 )
}
export default CartItem;