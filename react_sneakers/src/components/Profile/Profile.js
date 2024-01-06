import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileItem from '../../components/ProfileItem/ProfileItem';
import { selectItemsObj } from '../../store/itemsSlice';
import { selectPurchasedItems } from '../../store/cartSlice';


const Profile = () => {
 const purchasedItems = useSelector(selectPurchasedItems);
 const itemsObj = useSelector(selectItemsObj);
 console.log(purchasedItems)
 console.log(itemsObj)

 return (
  <div className='p-45'>
   <div className='d-flex flex-column'>
    <div className='d-flex mb-35'>
     <Link to="/" className='btnReturn'><button></button></Link>
     <h1>Мои покупки</h1>
    </div>
    <div className="d-flex flex-wrap">
     {Object.values(itemsObj).filter((item) => {
      if (purchasedItems[item.id]) {
       return item;
      }
      else { return null; }
     }).map((item) => {
      return <ProfileItem card={item} amount={purchasedItems[item.id]} />
     })}
    </div>
   </div>
  </div>
 )
}

export default Profile;