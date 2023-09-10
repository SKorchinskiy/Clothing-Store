import {
  HeaderContainer,
  HeaderContainerSide,
  HeaderContainerElement,
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/selectors/user.selector";
import { selectIsCartOpen } from "../../redux/selectors/cart.selector";
import {
  checkCurrentUserSession,
  startSignOut,
} from "../../redux/actions/user/user.action";
import { toggleCartIsOpen } from "../../redux/actions/cart/cart.action";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const cartIconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    dispatch(checkCurrentUserSession());
  }, [dispatch]);

  useEffect(() => {
    function checkClickArea(event: MouseEvent) {
      if (
        dropdownRef &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        cartIconRef &&
        cartIconRef.current &&
        !cartIconRef.current.contains(event.target as Node)
      ) {
        dispatch(toggleCartIsOpen(false));
      }
    }

    window.addEventListener("mousedown", checkClickArea);
    return () => window.removeEventListener("mousedown", checkClickArea);
  }, [dispatch]);

  const goToPage = (page: string) => navigate(page);

  return (
    <HeaderContainer>
      <HeaderContainerSide $side="left">
        <HeaderContainerElement
          onClick={() => {
            goToPage("/home");
          }}
        >
          <Logo style={{ cursor: "pointer" }} />
        </HeaderContainerElement>
      </HeaderContainerSide>
      <HeaderContainerSide $side="right">
        <HeaderContainerElement
          onClick={() => {
            goToPage("/shop");
          }}
        >
          Shop
        </HeaderContainerElement>
        {currentUser ? (
          <HeaderContainerElement
            onClick={() => {
              dispatch(startSignOut());
              goToPage("/auth");
            }}
          >
            Sign Out
          </HeaderContainerElement>
        ) : (
          <HeaderContainerElement
            onClick={() => {
              goToPage("/auth");
            }}
          >
            Sign In
          </HeaderContainerElement>
        )}
        <CartIcon ref={cartIconRef} />
      </HeaderContainerSide>
      {isCartOpen && <CartDropdown ref={dropdownRef} />}
    </HeaderContainer>
  );
}

export default Header;
