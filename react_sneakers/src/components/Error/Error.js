import { Link } from 'react-router-dom';

const Error = () => {
 return (
  <><center style={{ height: '600px' }}>
   <h1 style={{ marginBottom: '200px', marginTop: '200px' }}>404: Страница не найдена</h1>
   <Link to="/"><button className="greenBtn">Назад</button></Link>
  </center>
  </>

 )
}

export default Error;