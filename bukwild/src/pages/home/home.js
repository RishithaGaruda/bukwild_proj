import { useEffect, useState } from 'react';

import './styles/home.scss';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import { navDetails, imageFolder } from '../header/navContent';
import { content } from './content';
import Industry from '../../assets/slide_one.jpg'
import './styles/home.scss';

const Home = ( { navType, setNavType } ) => {
    const [ Image, setImage ] = useState( Industry );
    const [ footer, setFooter ] = useState( 'This is Industrial Cta' )
    const getComponent = () => {
       const { Blocks } = content.Pages.find( item => item.Title === navType )
       const currImage = imageFolder[ Blocks[ 0 ].Background ]
       const currFooter = Blocks[ 0 ].cta
       setImage( prev => currImage )
       setFooter( prev => currFooter )
    }
    
    useEffect( () => {
        getComponent();
    }, [ navType ])

  return( 
      <div className = "homeContainer" style = {{ backgroundImage: `url( ${ Image } )`}}>
             <Header navType={navType} setNavType={setNavType}/>
             <Body />
             <Footer footer = { footer }/>
      </div>
  )
};

export default Home;