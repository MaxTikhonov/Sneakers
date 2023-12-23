import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { selectItemsObj, changeFavorite } from '../../store/itemsSlice';
import { addFavorite, removeFavorite } from '../../store/favoriteSlice';

const CardsContainer = () => {
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState('');
  const itemsObj = useSelector(selectItemsObj);

  const onPlus = (event) => {
    console.log(event)
    event.preventDefault();
    if (event.target.nodeName !== "DIV" && event.target.name !== 'plus-checked') {
      let idItem = event.target.dataset.key;
      dispatch(addItem(itemsObj[`${idItem}`]))
    }
  }

  const onFavorite = (event) => {
    event.preventDefault();
    if (event.target.currentSrc.includes('heart-unliked')) {
      dispatch(addFavorite(event.target.dataset.key))
      dispatch(changeFavorite(event.target.dataset.key))
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
    console.log(itemsObj)
  }, [itemsObj])

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
          {Object.values(itemsObj).filter(item => item.name.toLowerCase().includes(inpValue)).map((item, index) => {
            return <Card plus={onPlus} favorite={onFavorite} key={index} data={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default CardsContainer;