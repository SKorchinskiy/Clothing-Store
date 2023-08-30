import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import CartItem from "../cart-item.component";

import {
  cartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItemFromCart,
} from "../../../stubs/cart-item.stub";

describe("<CartItem /> component", () => {
  it("should render cart-item UI elements", () => {
    const { asFragment } = render(<CartItem cartItem={cartItem} />);

    expect.assertions(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should call provided method when button is clicked", () => {
    render(
      <CartItem
        cartItem={cartItem}
        increaseItemQuantity={increaseItemQuantity}
        decreaseItemQuantity={decreaseItemQuantity}
        clearItemFromCart={clearItemFromCart}
      />
    );

    expect.assertions(3);

    const increaseQuantityElement = screen.getByText("❭");
    userEvent.click(increaseQuantityElement);
    expect(increaseItemQuantity).toHaveBeenCalledWith(cartItem);

    const decreaseQuantityElement = screen.getByText("❬");
    userEvent.click(decreaseQuantityElement);
    expect(decreaseItemQuantity).toHaveBeenCalledWith(cartItem);

    const clearItemElement = screen.getByText("✕");
    userEvent.click(clearItemElement);
    expect(clearItemFromCart).toHaveBeenCalled();
  });
});
