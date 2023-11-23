function App() {
  return (
    <div className="wrapper clear">
      <header className='header p-45'>
        <div className="d-flex justify-between">
          <div className='header-left d-flex align-center'>
            <img width={40} height={40} src='/img/logo.svg' alt='' className="mr-15" />
            <div className="header-info">
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className='color-grey'>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className='header-right d-flex align-center'>
            <li className="d-flex align-center mr-30">
              <img width={18} height={18} src='/img/cart.svg' alt='' className='mr-10' />
              <span>1205 руб.</span></li>
            <li className="d-flex align-center">
              <img width={18} height={18} src='/img/user_icon.svg' alt='' className='mr-10' />
              <span>Профиль</span>
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-45">
        <h1>Все кроссовки</h1>
        <div className="cards d-flex flex-wrap">
          <div className='card'>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='card-bottom d-flex justify-between mt-15 align-center'>
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className='card-bottom d-flex justify-between mt-15 align-center'>
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneaker" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='card-bottom d-flex justify-between mt-15 align-center'>
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneaker" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className='card-bottom d-flex justify-between mt-15 align-center'>
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
