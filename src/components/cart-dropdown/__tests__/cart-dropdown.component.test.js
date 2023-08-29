import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderWithProviders from "../../../utils/test.utils";

import CartDropdown from "../cart-dropdown.component";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    ...actualModule,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("cart dropdown component testing", () => {
  it("should contain specified text when no items added", async () => {
    renderWithProviders(<CartDropdown />, {});

    const textElement = await screen.findByText("Cart is empty!");

    expect(textElement).toBeInTheDocument();
  });

  it("should navigate to checkout when button is clicked", () => {
    renderWithProviders(<CartDropdown />);

    const dropdownButton = screen.getByRole("button");
    fireEvent.click(dropdownButton);

    expect(mockedUseNavigate).toBeCalledWith("/checkout");
  });

  it("should display items when added", () => {
    const cartSlice = {
      cartItems: [
        { id: 1, name: "item 1", imageUrl: "testUrl", quantity: 3, price: 10 },
        { id: 2, name: "item 2", imageUrl: "testUrl2", quantity: 1, price: 50 },
      ],
      isCartOpen: true,
    };

    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: cartSlice,
      },
    });

    const cartItems = cartSlice.cartItems.map(({ name }) =>
      screen.getByAltText(`${name}`)
    );

    expect(cartItems.length).toBe(cartSlice.cartItems.length);
  });
});
