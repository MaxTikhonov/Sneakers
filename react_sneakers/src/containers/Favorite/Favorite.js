import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFormatCost } from '../../store/itemsSlice';
import { addItem } from "../../store/cartSlice";
import { selectFavorite } from "../../store/favoriteSlice";


const Favorite = ({ data }) => {
 const dispatch = useDispatch();
 const favoriteItems = useSelector(selectFavorite)
 const [cards, setCards] = useState([]);
 const format = useSelector(selectFormatCost);
 const cardsObj = cards.reduce((accum, item) => {
  accum[item['id']] = item;
  return accum;
 }, {})

 const onPlus = (event) => {
  console.log(event)
  event.preventDefault();
  if (event.target.nodeName !== "DIV") {
   let idItem = event.target.dataset.key;
   dispatch(addItem(cardsObj[`${idItem}`]))
  }
 }

 const onFavorite = (event) => {
  event.preventDefault();
  console.log(event.target.dataset.key)
 }

 useEffect(() => {
  setCards(data)
 }, [data]);

 return (
  <div className='content p-45'>
   <div className='d-flex flex-column'>
    <div className='d-flex mb-35'>
     <Link to="/" className='btnReturn'><button></button></Link>
     <h1>Мое избранное</h1>
    </div>
    <div className="cards d-flex flex-wrap">
     {cards.map((item, index) => {
      return item.id === favoriteItems[item.id] ? <Card plus={onPlus} favorite={onFavorite} key={index} data={item} format={format[index]} /> : null
     })}
    </div>
   </div>
  </div>
 )
}

export default Favorite;