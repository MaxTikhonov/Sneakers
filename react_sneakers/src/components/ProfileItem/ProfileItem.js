import styles from './ProfileItem.module.scss';

const ProfileItem = ({ card, amount }) => {
 return (
  <>
   <div className={styles.card}>
    <img width={133} height={112} src={`/img/sneakers/${card.image}`} alt="sneaker" />
    <h5>{card.name}</h5>
    <div className={styles.cardBottom}>
     <div className="d-flex flex-column">
      <span>Цена:</span>
      <div className='d-flex justify-between'>
       <b className='mb-5 mr-10'>{`${new Intl.NumberFormat("ru-RU").format(card.price)} руб.`}</b>
       <b className='mr-10'>x</b>
       <b>{amount}</b>
      </div>
      <span>Итого:</span>
      <b>{`${new Intl.NumberFormat("ru-RU").format(amount * card.price)} руб.`}</b>
     </div>
    </div>
   </div>
  </>
 )
}

export default ProfileItem;