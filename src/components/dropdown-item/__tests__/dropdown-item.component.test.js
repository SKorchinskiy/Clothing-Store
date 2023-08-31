import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import DropdownItem from "../dropdown-item.component";

import { dropdownItemStub } from "./stubs/dropdown-item.stub";

describe("<DropdownItem /> component", () => {
  it("should render initial UI properly", () => {
    const { asFragment } = render(<DropdownItem cartItem={dropdownItemStub} />);

    const imageElement = screen.getByAltText(dropdownItemStub.name);
    expect(imageElement).toBeInTheDocument();

    const nameElement = screen.getByText(dropdownItemStub.name);
    expect(nameElement).toBeInTheDocument();

    const detailsElement = screen.getByText(
      `${dropdownItemStub.quantity} x $${dropdownItemStub.price}`
    );
    expect(detailsElement).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
