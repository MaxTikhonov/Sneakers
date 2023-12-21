import { Link } from 'react-router-dom';

const Profile = () => {
 return (
  <div className='p-45'>
   <div className='d-flex'>
    <Link to="/" className='btnReturn'><button></button></Link>
    <h1>Мои покупки</h1>
   </div>
  </div>
 )
}

export default Profile;