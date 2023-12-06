import styles from './CartItem.module.scss';
import { useEffect, useState } from 'react';

const CartItem = ({ data, remove }) => {
 const [cards, setCards] = useState([]);
 useEffect(() => {
  setCards(data);
 }, [data])

 return (
  cards.map((item, index) => (
   <div key={index} className="cart-item d-flex align-center">
    <img width={70} height={70} src={`/img/sneakers/${item.image}`} alt="Sneaker" className="mr-20" />
    <div className="cart-item__info mr-20">
     <h5>{item.name}</h5>
     <b>{item.price} руб.</b>
    </div>
    <img className="cart-item__cross" name={item.id} width={32} height={32} src="/img/cross.svg" alt="" onClick={remove} />
   </div>
  ))
 )
}
export default CartItem;