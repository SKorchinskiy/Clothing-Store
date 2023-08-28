/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CartIcon from "../cart-icon.component";

import renderWithProviders from "../../../utils/test.utils";

describe("cart icon component testing", () => {
  it("should be initially rendered with icon and 0 items", () => {
    renderWithProviders(<CartIcon />);

    const cartIcon = screen.getByText("shopping-bag.svg");
    const cartCount = screen.getByText("0");

    expect(cartIcon).toBeInTheDocument();
    expect(cartCount).toBeInTheDocument();
  });

  it("should open / close after each clicking", () => {
    const { store } = renderWithProviders(<CartIcon />);

    const cartIcon = screen.getByText("shopping-bag.svg");

    fireEvent.click(cartIcon);

    expect(store.getState().cart.isCartOpen).toBe(true);

    fireEvent.click(cartIcon);

    expect(store.getState().cart.isCartOpen).toBe(false);
  });

  it("should be closed when page is reloaded", () => {
    const { store, unmount } = renderWithProviders(<CartIcon />);

    const cartIcon = screen.getByText("shopping-bag.svg");
    fireEvent.click(cartIcon);

    expect(store.getState().cart.isCartOpen).toBe(true);

    unmount();

    const { store: newStore } = renderWithProviders(<CartIcon />, {
      preloadedState: store.getState(),
    });

    expect(newStore.getState().cart.isCartOpen).toBe(false);
  });
});
