import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileItem from '../../components/ProfileItem/ProfileItem';
import { selectItemsObj } from '../../store/itemsSlice';
import { selectPurchasedItems } from '../../store/cartSlice';


const Profile = () => {
 const purchasedItems = useSelector(selectPurchasedItems);
 const itemsObj = useSelector(selectItemsObj);

 return (
  <div className='p-45'>
   <div className='d-flex flex-column'>
    <div className='d-flex mb-35 align-center'>
     <Link to="/" className='btnReturn'><button></button></Link>
     <h1>Мои покупки</h1>
    </div>
    <div className="d-flex flex-wrap">
     {Object.values(itemsObj).filter((item) => {
      if (purchasedItems[item.id]) {
       return item;
      }
      else { return null; }
     }).map((item, index) => {
      return <ProfileItem key={index} card={item} amount={purchasedItems[item.id]} />
     })}
    </div>
   </div>
  </div>
 )
}

export default Profile;