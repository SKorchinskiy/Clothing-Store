import {
  HeaderContainer,
  HeaderContainerSide,
  HeaderContainerElement,
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser, observeStateChange } from "../../configs/firebase.config";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userSelector } from "../../redux/selectors/user.selector";
import { cartSelector } from "../../redux/selectors/cart.selector";
import { setCurrentUserAction } from "../../redux/actions/user/user.action";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector(userSelector);
  const { isCartOpen } = useSelector(cartSelector);

  useEffect(() => {
    const unsubscribe = observeStateChange((user) => {
      dispatch(setCurrentUserAction(user));
    });
    return unsubscribe;
  }, [dispatch]);

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
