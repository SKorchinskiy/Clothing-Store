import "./header.styles.scss";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../configs/firebase.config";

function Header() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const signOut = async () => {
    await signOutUser();
  };

  return (
    <div className="header-container">
      <div className="header-container-side header-container-left">
        <Logo onClick={() => navigate("/home")} style={{ cursor: "pointer" }} />
      </div>
      <div className="header-container-side  header-container-right">
        <Link to={"/shop"} className="header-container-element">
          Shop
        </Link>
        {currentUser ? (
          <Link
            onClick={signOut}
            to={"/auth"}
            className="header-container-element"
          >
            Sign Out
          </Link>
        ) : (
          <Link to={"/auth"} className="header-container-element">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Header;
