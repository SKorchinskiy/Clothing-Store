import "./header.styles.scss";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

function Header() {
  return (
    <div className="header-container">
      <div className="header-container-side header-container-left">
        <Logo />
      </div>
      <div className="header-container-side  header-container-right">
        <Link to={"/shop"} className="header-container-element">
          Shop
        </Link>
        <Link to={"/auth"} className="header-container-element">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Header;
