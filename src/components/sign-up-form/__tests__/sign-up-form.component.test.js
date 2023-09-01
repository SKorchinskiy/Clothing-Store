import "@testing-library/jest-dom";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignInForm from "../sign-up-form.component";

import { userStub } from "./stubs/sign-up-user.stub";

import renderWithProviders from "../../../utils/test.utils";
import { startEmailSignUp } from "../../../redux/actions/user/user.action";

const mockedUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  const actualModule = jest.requireActual("react-redux");
  return {
    ...actualModule,
    useDispatch: () => {
      const actualUseDispatch = actualModule.useDispatch();
      return (action) => {
        actualUseDispatch(action);
        mockedUseDispatch(action);
      };
    },
  };
});

describe("<SignInForm /> component", () => {
  it("should render initial UI properly", () => {
    const { asFragment } = renderWithProviders(<SignInForm />);

    const nameElement = screen.getByLabelText("name");
    expect(nameElement).toBeInTheDocument();

    const emailElement = screen.getByLabelText("email");
    expect(emailElement).toBeInTheDocument();

    const passwordElement = screen.getByLabelText("password");
    expect(passwordElement).toBeInTheDocument();

    const confirmPasswordElement = screen.getByLabelText("confirm password");
    expect(confirmPasswordElement).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("should dispatch startEmailSignUp when button is clicked", async () => {
    renderWithProviders(<SignInForm />);

    const nameElement = screen.getByLabelText("name");

    await act(async () => await userEvent.click(nameElement));
    await act(async () => await userEvent.paste(userStub.name));
    await waitFor(() => expect(nameElement.value).toBe(userStub.name));

    const emailElement = screen.getByLabelText("email");

    await act(async () => await userEvent.click(emailElement));
    await act(async () => await userEvent.paste(userStub.email));
    await waitFor(() => expect(emailElement.value).toBe(userStub.email));

    const passwordElement = screen.getByLabelText("password");

    await act(async () => await userEvent.click(passwordElement));
    await act(async () => await userEvent.paste(userStub.password));
    await waitFor(() => expect(passwordElement.value).toBe(userStub.password));

    const confirmPasswordElement = screen.getByLabelText("confirm password");
    await act(async () => await userEvent.click(confirmPasswordElement));
    await act(async () => await userEvent.paste(userStub.confirmPassword));
    await waitFor(() =>
      expect(confirmPasswordElement.value).toBe(userStub.confirmPassword)
    );

    const signUpButton = screen.getByText(/sign up/i, { selector: "button" });
    await act(async () => await userEvent.click(signUpButton));

    await waitFor(() =>
      expect(mockedUseDispatch).toHaveBeenCalledWith(
        startEmailSignUp({
          name: userStub.name,
          email: userStub.email,
          password: userStub.password,
        })
      )
    );

    expect(mockedUseDispatch).toHaveBeenCalledTimes(1);
  });
});
