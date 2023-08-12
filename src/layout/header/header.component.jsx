import {
  HeaderContainer,
  HeaderContainerSide,
  HeaderContainerElement,
} from "./header.styles";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../configs/firebase.config";

import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/selectors/cart.selector";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

function Header() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useSelector(cartSelector);

  const signOut = async () => {
    await signOutUser();
  };

  return (
    <HeaderContainer>
      <HeaderContainerSide $side="left">
        <Logo onClick={() => navigate("/home")} style={{ cursor: "pointer" }} />
      </HeaderContainerSide>
      <HeaderContainerSide $side="right">
        <HeaderContainerElement to={"/shop"}>Shop</HeaderContainerElement>
        {currentUser ? (
          <HeaderContainerElement onClick={signOut} to={"/auth"}>
            Sign Out
          </HeaderContainerElement>
        ) : (
          <HeaderContainerElement to={"/auth"}>Sign In</HeaderContainerElement>
        )}
        <CartIcon />
      </HeaderContainerSide>
      {isCartOpen && <CartDropdown />}
    </HeaderContainer>
  );
}

export default Header;
