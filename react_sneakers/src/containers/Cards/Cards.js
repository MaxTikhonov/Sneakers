import styles from './Cards.module.scss';
import Card from '../../components/Card/Card';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { selectItemsObj, changeFavorite } from '../../store/itemsSlice';

const CardsContainer = ({ loading }) => {
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState('');
  const itemsObj = useSelector(selectItemsObj);

  const onPlus = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "DIV" && event.target.name !== 'plus-checked') {
      let idItem = event.target.dataset.key;
      dispatch(addItem(itemsObj[`${idItem}`]))
    }
  }

  const onFavorite = (event) => {
    event.preventDefault();
    if (event.target.currentSrc.includes('heart-unliked') || event.target.currentSrc.includes('heart-liked')) {
      dispatch(changeFavorite(event.target.dataset.key))
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

  const renderItems = () => {
    const filtredItems = Object.values(itemsObj).filter(item => item.name.toLowerCase().includes(inpValue));
    return ((loading ? [...Array(10)] : filtredItems).map((item, index) => {
      return <Card plus={onPlus} favorite={onFavorite} key={index} data={item} isLoading={loading} />
    }))
  }

  return (
    <>
      <div className={styles.cards}>
        <div className={styles.cardsTitleSearch}>
          <h1 style={{ wordBreak: 'break-word' }} >{inpValue ? `Поиск по запросу: '${inpValue}'` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" />
            {inpValue && <img src="/img/cross.svg" alt="close" className='close-btn' onClick={onClose} />}
            <input style={{ paddingRight: '35px' }} type="text" onChange={onSearch} value={inpValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-center">
          {renderItems()}
        </div>
      </div>
    </>
  )
}

export default CardsContainer;