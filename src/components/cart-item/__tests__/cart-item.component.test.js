import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import CartItem from "../cart-item.component";

import {
  cartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItemFromCart,
} from "./stubs/cart-item.stub";

describe("<CartItem /> component", () => {
  it("should render cart-item UI elements", () => {
    const { asFragment } = render(<CartItem cartItem={cartItem} />);

    expect.assertions(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should call provided method when button is clicked", async () => {
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
    await act(async () => await userEvent.click(increaseQuantityElement));
    expect(increaseItemQuantity).toHaveBeenCalledWith(cartItem);

    const decreaseQuantityElement = screen.getByText("❬");
    await act(async () => await userEvent.click(decreaseQuantityElement));
    expect(decreaseItemQuantity).toHaveBeenCalledWith(cartItem);

    const clearItemElement = screen.getByText("✕");
    await act(async () => await userEvent.click(clearItemElement));
    expect(clearItemFromCart).toHaveBeenCalled();
  });
});
