import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act, screen } from "@testing-library/react";

import CategoryPreview from "../category-preview.component";

import { categoryPreview } from "./stubs/category-preview.stub";

import renderWithProviders from "../../../utils/test.utils";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    ...actualModule,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("<CategoryPreview /> component", () => {
  it("should render initial UI properly", () => {
    const { asFragment } = renderWithProviders(
      <CategoryPreview category={categoryPreview} />
    );

    const titleElement = screen.getByText(
      new RegExp(categoryPreview.title, "i")
    );
    expect(titleElement).toBeInTheDocument();

    const imageElements = categoryPreview.items.map((item) =>
      screen.getAllByAltText(item.name)
    );
    expect(imageElements).toHaveLength(3);

    const nameElements = categoryPreview.items.map((item) =>
      screen.getByText(item.name)
    );
    expect(nameElements).toHaveLength(3);

    const priceElements = categoryPreview.items.map((item) =>
      screen.getByText(`$${item.price}`)
    );
    expect(priceElements).toHaveLength(3);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shuold navigate to specific category page", async () => {
    renderWithProviders(<CategoryPreview category={categoryPreview} />);

    const titleElement = screen.getByText(
      new RegExp(categoryPreview.title, "i")
    );

    await act(async () => await userEvent.click(titleElement));

    expect(mockedUseNavigate).toHaveBeenCalledWith(
      `/category/${categoryPreview.title.toLowerCase()}`
    );
  });
});
