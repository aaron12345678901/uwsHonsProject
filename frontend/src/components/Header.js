import headerImage from "../generic-img/homepage-head-image.jpg";
import logo from "../generic-img/logo-color.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className=" header-opt"></div>

      <Link to="/">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      <div className="header-left"></div>

      <div className="header-right">
        <img src={headerImage} alt="Header background" />
      </div>
    </div>
  );
};

export default Header;
