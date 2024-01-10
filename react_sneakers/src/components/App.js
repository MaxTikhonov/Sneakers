import Header from './Header/Header';
import Cart from '../containers/Cart/Cart';
import Cards from '../containers/Cards/Cards';
import Error from '../components/Error/Error';
import Favorite from '../containers/Favorite/Favorite';
import Profile from '../components/Profile/Profile';
import Slider from '../containers/Slider/Slider';
import { switchPurchased, selectPurchased } from '../store/cartSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initItems } from '../store/itemsSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const [openCart, setOpenCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const purchased = useSelector(selectPurchased);

  async function fetchData() {
    setIsLoading(true);
    await fetch('https://656afe72dac3630cf7278b17.mockapi.io/items')
      .then(res => res.json())
      .then(res => {
        dispatch(initItems(res))
        setIsLoading(false);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {

  }, [purchased])

  const onClickCart = (event) => {
    event.preventDefault();
    if (event.currentTarget.classList.value.indexOf('cartOpen') > -1) {
      document.body.classList.add('hiddenBody')
      setOpenCart(true);
    }
    if (event.currentTarget.classList.value.indexOf('cartItem__cross') > -1) {
      document.body.classList.remove('hiddenBody')
      setOpenCart(false);
      if (purchased) {
        dispatch(switchPurchased());
      }
    }
  }


  return (
    <div className="wrapper clear">
      <Router>
        <Cart closeCart={onClickCart} open={openCart} />
        <Header openCart={onClickCart} />
        <Slider />
        <Routes>
          <Route path='/' element={<Cards loading={isLoading} />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
