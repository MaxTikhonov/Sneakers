import Header from './Header/Header';
import Card from './Card/Card';

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer p-30">
          <h2 className='d-flex justify-between mb-40'>Корзина <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" /></h2>
          <div className="items">
            <div className="cart-item d-flex align-center">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneaker" className="mr-20" />
              <div className="cart-item__info mr-20">
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <b>12 999 руб.</b>
              </div>
              <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" />
            </div>
            <div className="cart-item d-flex align-center">
              <img width={70} height={70} src="/img/sneakers/4.jpg" alt="Sneaker" className="mr-20" />
              <div className="cart-item__info mr-20">
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <b>8 999 руб.</b>
              </div>
              <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" />
            </div>
            <div className="cart-item d-flex align-center">
              <img width={70} height={70} src="/img/sneakers/4.jpg" alt="Sneaker" className="mr-20" />
              <div className="cart-item__info mr-20">
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <b>8 999 руб.</b>
              </div>
              <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" />
            </div>
            <div className="cart-item d-flex align-center">
              <img width={70} height={70} src="/img/sneakers/4.jpg" alt="Sneaker" className="mr-20" />
              <div className="cart-item__info mr-20">
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <b>8 999 руб.</b>
              </div>
              <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" />
            </div>
            <div className="cart-item d-flex align-center">
              <img width={70} height={70} src="/img/sneakers/4.jpg" alt="Sneaker" className="mr-20" />
              <div className="cart-item__info mr-20">
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <b>8 999 руб.</b>
              </div>
              <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" />
            </div>
            <div className="cart-item d-flex align-center">
              <img width={70} height={70} src="/img/sneakers/4.jpg" alt="Sneaker" className="mr-20" />
              <div className="cart-item__info mr-20">
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <b>8 999 руб.</b>
              </div>
              <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" />
            </div>
            <div className="cart-item d-flex align-center">
              <img width={70} height={70} src="/img/sneakers/4.jpg" alt="Sneaker" className="mr-20" />
              <div className="cart-item__info mr-20">
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <b>8 999 руб.</b>
              </div>
              <img className="cart-item__cross" width={32} height={32} src="/img/cross.svg" alt="" />
            </div>
          </div>
          <div className='cart-item__totalblock d-flex flex-column align-center'>
            <ul className='totalblock__info mb-20'>
              <li>
                <span>Итого: </span>
                <div className='ml-5 mr-5'></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div className='ml-5 mr-5'></div>
                <b>1024 руб.</b>
              </li>
            </ul>
            <button className='greenBtn'><span>Оформить заказ</span><img src="/img/arrow_right.svg" alt="" /></button>
          </div>
        </div>
      </div>
      <Header />
      <div className="content p-45">
        <div className='d-flex justify-between mb-35'>
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
