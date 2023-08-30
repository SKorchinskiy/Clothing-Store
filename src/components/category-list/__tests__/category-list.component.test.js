import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import CategoryList from "../category-list.component";

import { categoriesArray } from "../../../stubs/category.stub";

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    ...actualModule,
    useNavigate: () => jest.fn(),
  };
});

describe("<CategoryList /> component", () => {
  it("should render provided <Category> components", () => {
    const { asFragment } = render(
      <CategoryList categories={categoriesArray} />
    );

    const categoryElements = categoriesArray.map(({ title }) =>
      screen.getByText(title)
    );

    expect(categoryElements).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });
});
