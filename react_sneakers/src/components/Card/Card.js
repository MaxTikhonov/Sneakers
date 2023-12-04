import styles from './Card.module.scss';
import { useState } from 'react';


const Card = (props) => {
 const [card, setCard] = useState(props.data);
 const [isAdded, setIsAdded] = useState(false);
 const [isFavorite, setIsFavorite] = useState(false);
 let toCart = new Set();


 const onPlus = (event) => {
  console.log(props)
  setIsAdded(!isAdded);
 }
 const onFavorite = () => {
  setIsFavorite(!isFavorite);
 }

 return (
  <div className={styles.card}>
   <div className={styles.favorite}>
    <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked" onClick={onFavorite} />
   </div>
   <img width={133} height={112} src={`/img/sneakers/${card.image}`} alt="sneaker" />
   <h5>{card.name}</h5>
   <div className={styles.cardBottom}>
    <div className="d-flex flex-column">
     <span>Цена:</span>
     <b>{`${card.price} руб.`}</b>
    </div>
    <img className={styles.btnPlus} width={32} height={32} src={isAdded ? "/img/plus-checked.svg" : "/img/plus.svg"} alt="" onClick={onPlus} />
   </div>
  </div>
 )
}
export default Card;