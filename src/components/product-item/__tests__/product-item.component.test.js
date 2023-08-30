import "@testing-library/jest-dom";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithProviders from "../../../utils/test.utils";

import ProductItem from "../product-item.component";

import { productItemStub } from "../../../stubs/product-item.stub";

describe("<ProductItem /> component", () => {
  it("should render UI elements properly", () => {
    const { asFragment } = renderWithProviders(
      <ProductItem product={productItemStub} />
    );
    expect.assertions(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should add product to cart", async () => {
    const { store } = renderWithProviders(
      <ProductItem product={productItemStub} />
    );
    const getCartItems = () => store.getState().cart.cartItems;

    const addToCartButton = screen.getByRole("button");

    expect.assertions(4);

    expect(getCartItems()).toHaveLength(0);

    await act(async () => await userEvent.click(addToCartButton));
    expect(getCartItems()).toHaveLength(1);

    await act(async () => await userEvent.click(addToCartButton));
    expect(getCartItems()).toHaveLength(1);
    expect(getCartItems()[0].quantity).toBe(2);
  });
});
