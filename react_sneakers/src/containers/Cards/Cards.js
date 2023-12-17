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
    console.log(event)
    event.preventDefault();
    if (event.target.nodeName !== "DIV") {
      let idItem = event.target.dataset.key;
      dispatch(addItem(cardsObj[`${idItem}`]))
    }
  }

  const onFavorite = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    setCards(data)
  }, [data, format]);

  return (
    <>
      <div className="content p-45">
        <div className='d-flex justify-between mb-35'>
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          {cards.map((item, index) => {
            return <Card plus={onPlus} favorite={onFavorite} key={index} data={item} format={format[index]} />
          })}
        </div>
      </div>
    </>
  )
}

export default CardsContainer;