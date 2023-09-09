import { memo } from "react";

import {
  DropdownItemDetails,
  DropdownItemContainer,
} from "./dropdown-item.styles";

import { CartItemType } from "../cart-item/cart-item.component";

type DropdownItemProps = {
  cartItem: CartItemType;
};

function DropdownItem({ cartItem }: DropdownItemProps) {
  return (
    <DropdownItemContainer key={cartItem.id}>
      <img src={cartItem.imageUrl} alt={cartItem.name} />
      <DropdownItemDetails>
        <div>{cartItem.name}</div>
        <div>
          {cartItem.quantity} x ${cartItem.price}
        </div>
      </DropdownItemDetails>
    </DropdownItemContainer>
  );
}

export default memo(DropdownItem);
