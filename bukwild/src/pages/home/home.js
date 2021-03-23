import { useEffect, useState } from "react";
//import { CSSTransition } from "react-transition-group";
import "./styles/home.scss";
import Header from "../header/header";
import Body from "../body/body";
import Footer from "../footer/footer";
import { imageFolder } from "../header/navContent";
import content from "./content.json";
import Loader from "./loader";

import "./styles/home.scss";

const Home = ({ navType, setNavType }) => {
  const [Image, setImage] = useState(null);
  const [footer, setFooter] = useState(null);
  const [headline, setHeadline] = useState(null);
  const [subhead, setSubhead] = useState(null);
  //const [isVisible,setIsVisible]=useState(false);
  useEffect(() => {
    const getComponent = () => {
      const { blocks } = content.pages.find((item) => item.title === navType);
      const currImage = imageFolder[blocks[0].background];
      const currFooter = blocks[0].cta;
      const currHeadline = blocks[0].headline;
      const currSubhead = blocks[0].subhead;
      setImage((prev) => currImage);
      setFooter((prev) => currFooter);
      setHeadline((prev) => currHeadline);
      setSubhead((prev) => currSubhead);
    };
    if( Image === null){
         setTimeout( () => {
             getComponent();
         }, 800)
    }else{
        getComponent();
    }
    
  }, [navType]);
  if (Image === null) {
    return (
      <div className = "loaderClass">
        <Loader />
      </div>
    );
  }

  return (
    <div
      className="homeContainer"
      style={{ backgroundImage: `url( ${Image} )` }}
    >
      {/* <CSSTransition
        in={!isVisible}
        timeout={350}
        classNames="display"
        unmountOnExit
      ></CSSTransition> */}
      <Header navType={navType} setNavType={setNavType} />
      <Body headline={headline} subhead={subhead} />
      <Footer footer={footer} />
    </div>
  );
};

export default Home;
