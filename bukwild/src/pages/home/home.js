import { useEffect, useState } from 'react';

import './styles/home.scss';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import { navDetails, imageFolder } from '../header/navContent';
import content from './content.json';
import Industry from '../../assets/slide_one.jpg'
import  fetchData from './useFetch';
import './styles/home.scss';

const Home = ( { navType, setNavType } ) => {
    const [ Image, setImage ] = useState( null );
    const [ footer, setFooter ] = useState(  null );
    const [ headline, setHeadline ] = useState( null );
    const [ subhead, setSubhead ] = useState( null );
   
    const getComponent = () => {
       const { blocks } = content.pages.find( item => item.title === navType )
       const currImage = imageFolder[ blocks[ 0 ].background ]
       const currFooter = blocks[ 0 ].cta
       const currHeadline = blocks[ 0 ].headline
       const currSubhead = blocks[ 0 ].subhead
       setImage( prev => currImage )
       setFooter( prev => currFooter )
       setHeadline( prev => currHeadline )
       setSubhead( prev => currSubhead )
    }
    
    useEffect( () => {
        getComponent();
    }, [ navType ])
    if ( Image === null ){
        return null
    }

  return( 
      <div className = "homeContainer" style = {{ backgroundImage: `url( ${ Image } )`}}>
             <Header navType={navType} setNavType={setNavType}/>
             <Body headline = { headline } subhead = { subhead }/>
             <Footer footer = { footer }/>
      </div>
  )
};

export default Home;