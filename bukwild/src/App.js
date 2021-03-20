import { useState } from 'react';
import Home from './pages/home/home';


const  App = () => {
  const [ navType, setNavType ] = useState('Industries');
  return (
    <div >
      <Home navType = { navType } setNavType = {setNavType}/>
    </div>
  );
}

export default App;
