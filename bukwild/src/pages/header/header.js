import "./styles/header.scss";
import Icon from "../../assets/abc_logo.svg";
import { navDetails } from "./navContent";

const Header = ({ navType, setNavType }) => {
  const navButtons = navDetails.map((item) => (
    <div
      key={item.name}
      className={item.name === navType ? "navBtn activeNav" : "navBtn"}
      onClick = { () => setNavType( item.name ) }
    >
      {item.name}
    </div>
  ));

  return (
    <header className="headerContainer">
      <div className="headerHolder">
        <div className="titleContainer">
          <div className="titleHolder">
            <img src={Icon} alt="bukwil icon" />
          </div>
          <div className="navBar">{navButtons}</div>
        </div>
        <div className="contactContainer"> Contact Us </div>
      </div>
    </header>
  );
};

export default Header;
