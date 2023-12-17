import Main from '../components/Main/Main'
import Header from './Header/Header';
import Cart from '../containers/Cart/Cart';
import Cards from '../containers/Cards/Cards';
import Error from '../components/Error/Error';
import Favorite from '../components/Favorite/Favorite';
import Profile from '../components/Profile/Profile';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initItems, formatItems } from '../store/itemsSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  const [openCart, setOpenCart] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://656afe72dac3630cf7278b17.mockapi.io/items')
      .then(res => res.json())
      .then(res => {
        setItems(res)
        dispatch(initItems(res))
        dispatch(formatItems(res))
      })
  }, [])

  const onClickCart = (event) => {
    event.preventDefault();
    if (event.currentTarget.classList.contains('Header_cartOpen__mGfqy')) {
      document.body.classList.add('hiddenBody')
      setOpenCart(true);
    }
    if (event.currentTarget.classList.contains('Cart_cartItem__cross__vmWJC')) {
      document.body.classList.remove('hiddenBody')
      setOpenCart(false);
    }
  }


  return (
    <div className="wrapper clear">
      <Router>
        <Cart closeCart={onClickCart} open={openCart} />
        <Header openCart={onClickCart} />
        <Routes>
          <Route path='/' element={<Cards data={items} />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
