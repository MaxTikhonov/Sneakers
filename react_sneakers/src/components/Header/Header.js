const Header = () => {
 return (
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
 )
}
export default Header;