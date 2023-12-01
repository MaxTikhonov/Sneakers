import Card from '../../components/Card/Card';
import { useState } from 'react';

const CardsContainer = (props) => {
 const [cards, setCards] = useState(props.data)
 return (
  <>{cards.map((item, index) => {
   return <Card key={index} data={item} />
  })}
  </>
 )
}

export default CardsContainer;