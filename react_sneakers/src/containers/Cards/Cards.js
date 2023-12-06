import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store/cartSlice';

const CardsContainer = ({ data }) => {
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const cardsObj = cards.reduce((accum, item) => {
    accum[item['id']] = item;
    return accum;
  }, {})

  const onPlus = (event) => {
    event.preventDefault();
    let idItem = event.target.dataset.key;
    if (event.target.name === 'plus') {
      dispatch(addItem(cardsObj[`${idItem}`]))
    }
    else if (event.target.name === 'plus-checked') {
      dispatch(removeItem(idItem))
    }
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