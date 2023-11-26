const Card = () => {
 return (
  <div className='card'>
   <div className='favorite'>
    <img src="/img/heart-unliked.svg" alt="Unliked" />
   </div>
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
 )
}
export default Card;