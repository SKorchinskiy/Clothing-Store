import {
  HeaderContainer,
  HeaderContainerSide,
  HeaderContainerElement,
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/selectors/user.selector";
import { selectIsCartOpen } from "../../redux/selectors/cart.selector";
import {
  checkCurrentUserSession,
  startSignOut,
} from "../../redux/actions/user/user.action";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkCurrentUserSession());
  }, [dispatch]);

  const signOut = () => {
    dispatch(startSignOut()).then(() => navigate("/auth"));
  };

  return (
    <HeaderContainer>
      <HeaderContainerSide $side="left">
        <Logo onClick={() => navigate("/home")} style={{ cursor: "pointer" }} />
      </HeaderContainerSide>
      <HeaderContainerSide $side="right">
        <HeaderContainerElement onClick={() => navigate("/shop")}>
          Shop
        </HeaderContainerElement>
        {currentUser ? (
          <HeaderContainerElement onClick={signOut}>
            Sign Out
          </HeaderContainerElement>
        ) : (
          <HeaderContainerElement onClick={() => navigate("/auth")}>
            Sign In
          </HeaderContainerElement>
        )}
        <CartIcon />
      </HeaderContainerSide>
      {isCartOpen && <CartDropdown />}
    </HeaderContainer>
  );
}

export default Header;
