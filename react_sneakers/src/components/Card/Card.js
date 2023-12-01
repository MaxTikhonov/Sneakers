import styles from './Card.module.scss';
import { useState } from 'react';


const Card = (props) => {
 const [card, setCard] = useState(props.data);

 const onClickPlus = () => {
 }

 return (
  <div className={styles.card}>
   <div className={styles.favorite}>
    <img src="/img/heart-unliked.svg" alt="Unliked" />
   </div>
   <img width={133} height={112} src={`/img/sneakers/${card.image}`} alt="sneaker" />
   <h5>{card.name}</h5>
   <div className={styles.cardBottom}>
    <div className="d-flex flex-column">
     <span>Цена:</span>
     <b>{`${card.price} руб.`}</b>
    </div>
    <button onClick={onClickPlus}>
     <img width={11} height={11} src="/img/plus.svg" alt="" />
    </button>
   </div>
  </div>
 )
}
export default Card;