import styles from './Card.module.scss';
import { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';


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


 useEffect(
  () => {
   let timer1 = setTimeout(() => setLogic({ ...logic, isAdded: false }), 500);
   return () => {
    clearTimeout(timer1);
   };
  }, [logic]);

 return (
  <div className={styles.card}>
   <div className={styles.favorite}>
    <SwitchTransition>
     <CSSTransition
      key={logic.isFavorite}
      timeout={60}
      classNames="cssTransBtn"
     >
      <div onClick={favorite}>
       {logic.isFavorite ? <img data-key={data.id} name="liked" src="/img/heart-liked.svg" alt="liked" onClick={onFavorite} /> : <img data-key={data.id} name="unliked" src="/img/heart-unliked.svg" alt="Unliked" onClick={onFavorite} />}
      </div>
     </CSSTransition>
    </SwitchTransition>
   </div>
   <img width={133} height={112} src={`/img/sneakers/${data.image}`} alt="sneaker" />
   <h5>{data.name}</h5>
   <div className={styles.cardBottom}>
    <div className="d-flex flex-column">
     <span>Цена:</span>
     <b>{`${format} руб.`}</b>
    </div>
    <SwitchTransition>
     <CSSTransition
      key={logic.isAdded}
      timeout={60}
      classNames="cssTransBtn"
     >
      <div onClick={plus}>
       {logic.isAdded ? <img data-key={data.id} name="plus-checked" className={styles.btnPlus} width={32} height={32} src="/img/plus-checked.svg" alt="" onClick={onAdd} /> : <img data-key={data.id} name="plus" className={styles.btnPlus} width={32} height={32} src="/img/plus.svg" alt="" onClick={onAdd} />}
      </div>
     </CSSTransition>
    </SwitchTransition>
   </div>
  </div>
 )
}
export default Card;