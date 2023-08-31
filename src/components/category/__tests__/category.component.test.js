import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { screen, render, act } from "@testing-library/react";

import Category from "../category.component";

import { category } from "../../../stubs/category.stub";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    ...actualModule,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("<Category /> component", () => {
  it("should render UI elements properly", () => {
    const { asFragment } = render(<Category category={category} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should navigate to category when clicked", async () => {
    render(<Category category={category} />);

    const titleElement = screen.getByText(category.title);
    await act(async () => await userEvent.click(titleElement));

    expect(mockedUseNavigate).toHaveBeenCalledWith(
      `/category/${category.title}`
    );
  });
});
