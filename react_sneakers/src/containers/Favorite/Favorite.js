import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { selectFavorite } from "../../store/favoriteSlice";
import { selectItemsObj } from "../../store/itemsSlice";


const Favorite = () => {
 const dispatch = useDispatch();
 const favoriteItems = useSelector(selectFavorite);
 const itemsObj = useSelector(selectItemsObj);

 const onPlus = (event) => {
  console.log(event)
  event.preventDefault();
  if (event.target.nodeName !== "DIV") {
   let idItem = event.target.dataset.key;
   dispatch(addItem(itemsObj[`${idItem}`]))
  }
 }

 const onFavorite = (event) => {
  event.preventDefault();
  console.log(event.target.dataset.key)
 }


 return (
  <div className='content p-45'>
   <div className='d-flex flex-column'>
    <div className='d-flex mb-35'>
     <Link to="/" className='btnReturn'><button></button></Link>
     <h1>Мое избранное</h1>
    </div>
    <div className="cards d-flex flex-wrap">
     {Object.values(itemsObj).map((item, index) => {
      return item.id === favoriteItems[item.id] ? <Card plus={onPlus} favorite={onFavorite} key={index} data={item} /> : null
     })}
    </div>
   </div>
  </div>
 )
}

export default Favorite;