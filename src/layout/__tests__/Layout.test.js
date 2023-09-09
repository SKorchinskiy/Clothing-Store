import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act, render, screen, waitFor, within } from "@testing-library/react";
import { server } from "../../mocks/mock-service-worker";

import App from "../../App.";

jest.mock("../../utils/firebase.utils");
jest.mock("../../configs/firebase.config");

const userStub = {
  name: "test",
  email: "test@gmail.com",
  password: "123123",
  confirmPassword: "123123",
};

const mockUseNavigate = jest.fn();

jest.mock("react-router", () => {
  const actualModule = jest.requireActual("react-router");
  return {
    ...actualModule,
    useNavigate: () => {
      const originalNavigate = actualModule.useNavigate();
      return (route) => {
        originalNavigate(route);
        mockUseNavigate(route);
      };
    },
  };
});

describe("<App /> component", () => {
  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it("should render without a crush", async () => {
    await waitFor(async () => await render(<App />));
  });

  it("should use mocked firebase.utils.js module to avoid network calls", async () => {
    await waitFor(async () => await render(<App />));
    const mensCategoryPreview = await screen.findByText(/^mens$/i);
    expect(mensCategoryPreview).toBeInTheDocument();

    // go to mock mens category
    await act(async () => await userEvent.click(mensCategoryPreview));
    const mockedCategoryName = await screen.findByText(/^mock mens$/i);
    expect(mockedCategoryName).toBeInTheDocument();
    expect(mockUseNavigate).toHaveBeenLastCalledWith("/category/mens");
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);

    // by default categoryFactory returns 2 mock category items
    const itemAddToCartButton = await screen.findAllByText(/add to cart/i, {
      selector: "button",
    });
    expect(itemAddToCartButton).toHaveLength(2);
  }, 3000);

  it("should update UI when user sign up", async () => {
    render(<App />);

    expect.assertions(20);

    // get link element to sign in/up page
    const signInElement = await screen.findByText(/^sign in$/i);
    expect(signInElement).toBeInTheDocument();

    // go to sign in/up page
    await act(async () => await userEvent.click(signInElement));

    // get sign up form
    const signUpForm = await screen.findByRole("form", { name: "sign-up" });
    expect(signUpForm).toBeInTheDocument();

    expect(mockUseNavigate).toBeCalledWith("/auth");
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);

    // fill sign up form with name
    const nameInput = await within(signUpForm).findByLabelText("name");
    expect(nameInput).toBeInTheDocument();
    await act(async () => await userEvent.click(nameInput));
    expect(nameInput).toHaveFocus();
    await act(async () => await userEvent.paste(userStub.name));
    expect(nameInput.value).toBe(userStub.name);

    // fill sign up form with email
    const emailInput = await within(signUpForm).findByLabelText("email");
    expect(emailInput).toBeInTheDocument();
    await act(async () => await userEvent.click(emailInput));
    expect(emailInput).toHaveFocus();
    await act(async () => await userEvent.paste(userStub.email));
    expect(emailInput.value).toBe(userStub.email);

    // fill sign up form with password
    const passwordInput = await within(signUpForm).findByLabelText("password");
    expect(passwordInput).toBeInTheDocument();
    await act(async () => await userEvent.click(passwordInput));
    expect(passwordInput).toHaveFocus();
    await act(async () => await userEvent.paste(userStub.password));
    expect(passwordInput.value).toBe(userStub.password);

    // fill sign up form with confirm password
    const confirmPasswordInput = await within(signUpForm).findByLabelText(
      "confirm password"
    );
    expect(confirmPasswordInput).toBeInTheDocument();
    await act(async () => await userEvent.click(confirmPasswordInput));
    expect(confirmPasswordInput).toHaveFocus();
    await act(async () => await userEvent.paste(userStub.confirmPassword));
    expect(confirmPasswordInput.value).toBe(userStub.confirmPassword);

    // get sign up button and click on it
    const signUpButton = await within(signUpForm).findByRole("button", {
      name: /^sign up$/i,
    });
    expect(signUpButton).toBeInTheDocument();
    await act(async () => await userEvent.click(signUpButton));

    // check if sign in was toggled to sign out
    const signOutElement = await screen.findByText(/^sign out$/i);
    await waitFor(() => expect(signOutElement).toBeInTheDocument(), {
      timeout: 10000,
      interval: 1000,
    });

    // check if was redirected from /auth to /home page
    expect(mockUseNavigate).toBeCalledWith("/home");
    expect(mockUseNavigate).toHaveBeenCalledTimes(2);
  }, 30000);

  it("should add products from shop page to the cart", async () => {
    // render app
    await act(async () => await render(<App />));

    // get shop link element
    const shopLinkElement = await screen.findByText(/^shop$/i);
    expect(shopLinkElement).toBeInTheDocument();

    // go to shop page
    await act(async () => await userEvent.click(shopLinkElement));
    await waitFor(() => expect(mockUseNavigate).toHaveBeenCalledWith("/shop"));
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);

    // open cart dropdown
    const cartDropdownToggle = await screen.findByTitle(/^shopping-bag$/i);
    expect(cartDropdownToggle).toBeInTheDocument();
    await act(async () => await userEvent.click(cartDropdownToggle));

    // check cart dropdown to be empty
    const cartText = screen.getByText(/^cart is empty!$/i);
    expect(cartText).toBeInTheDocument();
    await act(async () => await userEvent.click(cartDropdownToggle));
    expect(cartText).not.toBeInTheDocument();

    // get available product items
    // 6 is generated because getAllCategoriesProducts
    // generates 3 categories and 2 products per category
    const productItems = await screen.findAllByRole("button", {
      name: /^add to cart$/i,
    });
    expect(productItems).toHaveLength(6);

    // add 2 elements to the cart
    await act(async () => await userEvent.click(productItems[0]));
    await act(async () => await userEvent.click(productItems[1]));

    // check if number in cart icon container changed
    const cartIconContainer = screen.getByTitle(/^cart-icon-container$/i);
    expect(cartIconContainer).toBeInTheDocument();
    const cartItemsCount = await within(cartIconContainer).findByText("2");
    expect(cartItemsCount).toBeInTheDocument();

    // go to checkout page
    await act(async () => await userEvent.click(cartDropdownToggle));
    const checkoutRedirectButton = await screen.findByRole("button", {
      name: /^go to checkout$/i,
    });
    expect(checkoutRedirectButton).toBeInTheDocument();
    await act(async () => await userEvent.click(checkoutRedirectButton));
    await waitFor(() =>
      expect(mockUseNavigate).toHaveBeenLastCalledWith("/checkout")
    );
    expect(mockUseNavigate).toHaveBeenCalledTimes(2);
    await act(async () => await userEvent.click(cartDropdownToggle));
    await waitFor(() => expect(checkoutRedirectButton).not.toBeInTheDocument());

    // check if added cart items images are on the page
    const cartItems = await screen.findAllByRole("img");
    expect(cartItems).toHaveLength(2);
  });
});
