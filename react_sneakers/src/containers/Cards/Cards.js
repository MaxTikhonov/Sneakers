import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { selectFormatCost } from '../../store/itemsSlice';

const CardsContainer = ({ data }) => {
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const format = useSelector(selectFormatCost);
  const cardsObj = cards.reduce((accum, item) => {
    accum[item['id']] = item;
    return accum;
  }, {})

  const onPlus = (event) => {
    event.preventDefault();
    let idItem = event.target.dataset.key;
    dispatch(addItem(cardsObj[`${idItem}`]))
  }

  const onFavorite = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    setCards(data)
  }, [data, format]);

  return (
    <>{cards.map((item, index) => {
      return <Card plus={onPlus} favorite={onFavorite} key={index} data={item} format={format[index]} />
    })}
    </>
  )
}

export default CardsContainer;