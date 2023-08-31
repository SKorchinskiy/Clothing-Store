import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act, screen, waitFor } from "@testing-library/react";

import Header from "../header.component";

import renderWithProviders from "../../../utils/test.utils";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    ...actualModule,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("<Header /> component", () => {
  it("should render initial structure properly", () => {
    const { asFragment } = renderWithProviders(<Header />);

    const logoContainer = screen.getByText("crown.svg");
    expect(logoContainer).toBeInTheDocument();

    const shopElement = screen.getByText(/^shop$/i);
    expect(shopElement).toBeInTheDocument();

    const signInElement = screen.getByText(/^sign in$/i);
    expect(signInElement).toBeInTheDocument();

    const shoppingBagElement = screen.getByText("shopping-bag.svg");
    expect(shoppingBagElement).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("should navigate to home page when logo is clicked", async () => {
    renderWithProviders(<Header />);

    const logoElement = screen.getByText("crown.svg");
    await act(async () => await userEvent.click(logoElement));

    await waitFor(() =>
      expect(mockedUseNavigate).toHaveBeenCalledWith("/home")
    );
    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
  });

  it("should navigate to shop page when appropriate link is clicked", async () => {
    renderWithProviders(<Header />);

    const shopLinkElement = screen.getByText(/^shop$/i);

    await act(async () => await userEvent.click(shopLinkElement));
    await waitFor(() =>
      expect(mockedUseNavigate).toHaveBeenCalledWith("/shop")
    );
  });

  it("should navigate to sign-in page when appropriate link is clicked", async () => {
    renderWithProviders(<Header />);

    const signInLinkElement = screen.getByText(/^sign in$/i);

    await act(async () => await userEvent.click(signInLinkElement));

    await waitFor(() =>
      expect(mockedUseNavigate).toHaveBeenCalledWith("/auth")
    );
  });

  it("should open cart dropdown when shopping-bag icon is clicked", async () => {
    renderWithProviders(<Header />);

    const shoppingBagIcon = screen.getByText("shopping-bag.svg");

    await act(async () => await userEvent.click(shoppingBagIcon));

    const cartDropdownTextElement = await screen.findByText(
      /^cart is empty!$/i
    );
    expect(cartDropdownTextElement).toBeInTheDocument();

    const cartDropdownButton = await screen.findByText(/^go to checkout$/i);
    expect(cartDropdownButton).toBeInTheDocument();

    await act(async () => await userEvent.click(cartDropdownButton));

    await waitFor(() => expect(mockedUseNavigate).toBeCalledWith("/checkout"));
  });

  it("should toggle cart dropdown after each click", async () => {
    renderWithProviders(<Header />);

    const shoppingBagIcon = screen.getByText("shopping-bag.svg");

    await act(async () => await userEvent.click(shoppingBagIcon));

    const cartDropdownTextElement = await screen.findByText(
      /^cart is empty!$/i
    );
    expect(cartDropdownTextElement).toBeInTheDocument();

    await act(async () => await userEvent.click(shoppingBagIcon));
    await waitFor(() =>
      expect(cartDropdownTextElement).not.toBeInTheDocument()
    );
  });
});
