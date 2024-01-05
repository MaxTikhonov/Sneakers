import styles from './CartItem.module.scss';
import { useEffect, useState } from 'react';

const CartItem = ({ data, remove, minus, add, amount }) => {
 const [cards, setCards] = useState([]);
 const [amountProducts, setAmountProducts] = useState({})
 useEffect(() => {
  setCards(data);
  setAmountProducts(amount)
 }, [data, amount])

 return (
  cards.map((item, index) => (
   <div key={index} className={styles.cartItem}>
    <img width={70} height={70} src={`/img/sneakers/${item.image}`} alt="Sneaker" className="mr-20" />
    <div className="cart-item__info mr-20">
     <h5>{item.name}</h5>
     <div className='d-flex justify-between'>
      <b>{new Intl.NumberFormat("ru-RU").format(item.price)} руб.</b>
      <b>x</b>
      <b>{amountProducts[item.id]}</b>
     </div>
    </div>
    <div className='d-flex flex-column align-center'>
     <img className={styles.cartItem__cross} name={item.id} width={40} height={40} src="/img/cross.svg" alt="" onClick={remove} />
     <div className={styles.wrapperBtnMinPlus}>
      <button className={styles.btnMinus} name={item.id} onClick={minus}></button>
      <button className={styles.btnPlus} name={item.id} onClick={add}></button>
     </div>
    </div>
   </div>
  ))
 )
}
export default CartItem;