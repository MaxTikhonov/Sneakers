import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';

const CardsContainer = (props) => {
 const [cards, setCards] = useState([])

 useEffect(() => {
  setCards(props.data)
 }, [props.data]);

 return (
  <>{cards.map((item, index) => {
   return <Card key={index} data={item} />
  })}
  </>
 )
}

export default CardsContainer;