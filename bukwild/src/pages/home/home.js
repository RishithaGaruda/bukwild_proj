import { useEffect, useState } from 'react';

import './styles/home.scss';
import Header from '../header/header';
import { navDetails, imageFolder } from '../header/navContent';
import { content } from './content';
import Industry from '../../assets/slide_one.jpg'
import './styles/home.scss';

const Home = ( { navType, setNavType } ) => {
    const [ Image, setImage ] = useState( Industry );
    const getComponent = () => {
       const { Blocks } = content.Pages.find( item => item.Title === navType )
       const currImage = imageFolder[ Blocks[ 0 ].Background ]
       setImage( prev => currImage )
    }
    
    useEffect( () => {
        getComponent();
    }, [ navType ])

  return( 
      <div className = "homeContainer" style = {{ backgroundImage: `url( ${ Image } )`}}>
             <Header navType={navType} setNavType={setNavType}/>
      </div>
  )
};

export default Home;