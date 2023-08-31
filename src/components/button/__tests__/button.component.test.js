import { screen, render, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../button.component";
import { DefaultButton, GoogleButton, InvertedButton } from "../button.styles";
import userEvent from "@testing-library/user-event";

describe("<Button/> component", () => {
  it("should be rendered in the document", () => {
    render(<Button />);

    const testButton = screen.getByRole("button");

    expect.assertions(1);
    expect(testButton).toBeInTheDocument();
  });

  it("should contain <DefaultButton />'s componentId", () => {
    const { asFragment } = render(<Button buttonType="default-btn" />);

    const testButton = screen.getByRole("button");

    expect.assertions(2);
    expect(testButton.className).toContain(
      DefaultButton.componentStyle.componentId
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain <InvertedButton />'s componentId", () => {
    const { asFragment } = render(<Button buttonType="invert-btn" />);

    const testButton = screen.getByRole("button");

    expect.assertions(2);
    expect(testButton.className).toContain(
      InvertedButton.componentStyle.componentId
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain <GoogleButton />'s componentId", () => {
    const { asFragment } = render(<Button buttonType="google-btn" />);

    const testButton = screen.getByRole("button");

    expect.assertions(2);
    expect(testButton.className).toContain(
      GoogleButton.componentStyle.componentId
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render child component", () => {
    const child = <span>Button's child</span>;
    render(<Button children={child} />);

    const textElement = screen.getByText("Button's child");

    expect.assertions(1);
    expect(textElement).toBeInTheDocument();
  });

  it("should call event handler when clicked", async () => {
    const mockedHandler = jest.fn();
    render(<Button onClick={mockedHandler} />);

    const testButton = screen.getByRole("button");
    await act(async () => await userEvent.click(testButton));

    expect.assertions(1);
    expect(mockedHandler).toBeCalled();
  });
});
