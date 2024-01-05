import styles from './Card.module.scss';
import { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ContentLoader from 'react-content-loader';


const Card = ({ data, plus, favorite, isLoading }) => {
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
  <>{isLoading ? <div className={styles.card}><ContentLoader
   speed={1}
   width={400}
   height={286}
   viewBox="0 0 400 286"
   backgroundColor="#f3f3f3"
   foregroundColor="#ecebeb"
  >
   <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
   <rect x="0" y="106" rx="3" ry="3" width="150" height="15" />
   <rect x="0" y="125" rx="3" ry="3" width="93" height="15" />
   <rect x="0" y="147" rx="8" ry="8" width="80" height="24" />
   <rect x="120" y="142" rx="8" ry="8" width="32" height="32" />
  </ContentLoader></div> : <div className={styles.card}>
   <div className={styles.favorite}>
    <SwitchTransition>
     <CSSTransition
      key={logic.isFavorite}
      timeout={60}
      classNames="cssTransBtn"
     >
      <div onClick={favorite}>
       {data.favorite ? <img data-key={data.id} name="liked" src="/img/heart-liked.svg" alt="liked" onClick={onFavorite} /> : <img data-key={data.id} name="unliked" src="/img/heart-unliked.svg" alt="Unliked" onClick={onFavorite} />}
      </div>
     </CSSTransition>
    </SwitchTransition>
   </div>
   <img width={133} height={112} src={`/img/sneakers/${data.image}`} alt="sneaker" />
   <h5>{data.name}</h5>
   <div className={styles.cardBottom}>
    <div className="d-flex flex-column">
     <span>Цена:</span>
     <b>{`${new Intl.NumberFormat("ru-RU").format(data.price)} руб.`}</b>
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
  </div>}</>
 )
}
export default Card;