import dataCards from '../data/cards.json';
import Header from './Header/Header';
import Cart from '../containers/Cart/Cart';
import Cards from '../containers/Cards/Cards';
import { useState, useEffect } from 'react';


function App() {
  const [openCart, setOpenCart] = useState(false);

  const onClickCart = (event) => {
    if (event.target.classList.contains('Header_cartOpen__mGfqy')) {
      setOpenCart(true);
    }
    if (event.target.classList.contains('Cart_cartItem__cross__vmWJC')) {
      setOpenCart(false);
    }
  }



  useEffect(() => {

  }, [openCart])

  return (
    <div className="wrapper clear">
      <Cart closeCart={onClickCart} open={openCart} />
      <Header openCart={onClickCart} />
      <div className="content p-45">
        <div className='d-flex justify-between mb-35'>
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          <Cards data={dataCards} />
        </div>
      </div>
    </div>
  );
}

export default App;
