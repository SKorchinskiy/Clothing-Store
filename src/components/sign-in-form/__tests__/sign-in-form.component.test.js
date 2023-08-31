import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";

import SignInForm from "../sign-in-form.component";
import renderWithProviders from "../../../utils/test.utils";

import { userStub } from "../../../stubs/sign-in-user.stub";
import { startEmailSignIn } from "../../../redux/actions/user/user.action";

const mockedUseDispatch = jest.fn();
jest.mock("react-redux", () => {
  const actualModule = jest.requireActual("react-redux");
  return {
    __esModule: true,
    ...actualModule,
    useDispatch: () => mockedUseDispatch,
  };
});

describe("<SignInForm /> component", () => {
  it("should render initial UI properly", () => {
    const { asFragment } = renderWithProviders(<SignInForm />);

    expect.assertions(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render UI with user data in the form", async () => {
    const { asFragment } = renderWithProviders(<SignInForm />);

    expect.assertions(6);

    const emailElement = screen.getByPlaceholderText("enter an email");
    expect(emailElement).toBeInTheDocument();

    const passwordElement = screen.getByPlaceholderText("enter a password");
    expect(passwordElement).toBeInTheDocument();

    const signInButtons = screen.getAllByRole("button");
    expect(signInButtons).toHaveLength(2);

    await act(async () => await userEvent.click(emailElement));
    await act(async () => await userEvent.paste(userStub.email));

    await waitFor(() => expect(emailElement.value).toBe(userStub.email));

    await act(async () => await userEvent.click(passwordElement));
    await act(async () => await userEvent.paste(userStub.password));

    await waitFor(() => expect(passwordElement.value).toBe(userStub.password));

    expect(asFragment()).toMatchSnapshot();
  });

  it("should trigger proper action when manual sign in is used", async () => {
    renderWithProviders(<SignInForm />);

    expect.assertions(1);

    const emailElement = screen.getByPlaceholderText("enter an email");
    const passwordElement = screen.getByPlaceholderText("enter a password");

    const signInButton = screen.getByText(/^sign in$/i, {
      selector: "button",
    });

    await act(async () => await userEvent.click(emailElement));
    await act(async () => await userEvent.paste(userStub.email));

    await act(async () => await userEvent.click(passwordElement));
    await act(async () => await userEvent.paste(userStub.password));

    await act(async () => await fireEvent.submit(signInButton));

    expect(mockedUseDispatch).toHaveBeenCalledWith(
      startEmailSignIn(userStub.email, userStub.password)
    );
  });
});
