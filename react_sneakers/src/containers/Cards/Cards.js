import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';

const CardsContainer = ({ data }) => {
 const [cards, setCards] = useState([])

 useEffect(() => {
  setCards(data)
 }, [data]);

 return (
  <>{cards.map((item, index) => {
   return <Card key={index} data={item} />
  })}
  </>
 )
}

export default CardsContainer;