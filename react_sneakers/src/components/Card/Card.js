import styles from './Card.module.scss';
import { useState } from 'react';


const Card = ({ data, plus, favorite, format }) => {
 const [logic, setLogic] = useState({
  isAdded: false,
  isFavorite: false
 });

 const onAdd = () => {
  logic.isAdded ? setLogic({ ...logic, isAdded: false }) : setLogic({ ...logic, isAdded: true })
 }

 const onFavorite = () => {
  logic.isFavorite ? setLogic({ ...logic, isFavorite: false }) : setLogic({ ...logic, isFavorite: true })
 }

 return (
  <div className={styles.card}>
   <div className={styles.favorite}>
    <div onClick={favorite}><img data-key={data.id} name={logic.isFavorite ? "liked" : "unliked"} src={logic.isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked" onClick={onFavorite} /></div>
   </div>
   <img width={133} height={112} src={`/img/sneakers/${data.image}`} alt="sneaker" />
   <h5>{data.name}</h5>
   <div className={styles.cardBottom}>
    <div className="d-flex flex-column">
     <span>Цена:</span>
     <b>{`${format} руб.`}</b>
    </div>
    <div onClick={plus}>
     <img data-key={data.id} name={logic.isAdded ? "plus-checked" : "plus"} className={styles.btnPlus} width={32} height={32} src={logic.isAdded ? "/img/plus-checked.svg" : "/img/plus.svg"} alt="" onClick={onAdd} />
    </div>
   </div>
  </div>
 )
}
export default Card;