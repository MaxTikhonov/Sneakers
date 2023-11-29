import Header from './Header/Header';
import Card from './Card/Card';
import Cart from './Cart/Cart';

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
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
