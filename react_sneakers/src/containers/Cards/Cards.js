import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';

const CardsContainer = ({ data }) => {
 const [cards, setCards] = useState([])
 const cardsObj = cards.reduce((accum, item) => {
  accum[item['id']] = item;
  return accum;
 }, {})

 const onPlus = (event) => {
  event.preventDefault();
 }

 const onFavorite = (event) => {
  event.preventDefault();
 }

 useEffect(() => {
  setCards(data)
 }, [data]);

 return (
  <>{cards.map((item, index) => {
   return <Card plus={onPlus} favorite={onFavorite} key={index} data={item} />
  })}
  </>
 )
}

export default CardsContainer;