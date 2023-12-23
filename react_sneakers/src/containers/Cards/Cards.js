import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { selectFormatCost } from '../../store/itemsSlice';
import { addFavorite, removeFavorite } from '../../store/favoriteSlice';

const CardsContainer = ({ data }) => {
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const [inpValue, setInpValue] = useState('');
  const format = useSelector(selectFormatCost);
  const cardsObj = cards.reduce((accum, item) => {
    accum[item['id']] = item;
    return accum;
  }, {})

  const onPlus = (event) => {
    console.log(event)
    event.preventDefault();
    if (event.target.nodeName !== "DIV" && event.target.name !== 'plus-checked') {
      let idItem = event.target.dataset.key;
      dispatch(addItem(cardsObj[`${idItem}`]))
    }
  }

  const onFavorite = (event) => {
    event.preventDefault();
    if (event.target.currentSrc.includes('heart-unliked')) {
      dispatch(addFavorite(event.target.dataset.key))
    }
    else if (event.target.currentSrc.includes('heart-liked')) {
      dispatch(removeFavorite(event.target.dataset.key))
    }

  }

  const onClose = () => {
    setInpValue('')
  }

  const onSearch = (event) => {
    let a = event.target.value;
    if (event.target.value.length >= 20) {
      a = "";
      setInpValue(a.toLowerCase())
    }
    setInpValue(a.toLowerCase())
  }

  useEffect(() => {
    setCards(data)
  }, [data, format]);

  return (
    <>
      <div className="content p-45">
        <div className='d-flex justify-between mb-35'>
          <h1 style={{ wordBreak: 'break-word' }} >{inpValue ? `Поиск по запросу: '${inpValue}'` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" />
            {inpValue && <img src="/img/cross.svg" alt="close" className='close-btn' onClick={onClose} />}
            <input style={{ paddingRight: '35px' }} type="text" onChange={onSearch} value={inpValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          {cards.filter(item => item.name.toLowerCase().includes(inpValue)).map((item, index) => {
            return <Card plus={onPlus} favorite={onFavorite} key={index} data={item} format={format[index]} />
          })}
        </div>
      </div>
    </>
  )
}

export default CardsContainer;