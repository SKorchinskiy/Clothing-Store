import {
  ProductItemDetails,
  ProductItemContainer,
} from "./product-item.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

function ProductItem({ product }) {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductItemContainer>
      <img src={imageUrl} alt={name} />
      <ProductItemDetails>
        <span>{name}</span>
        <span>${price}</span>
      </ProductItemDetails>
      <Button
        type="button"
        value={"Add To Cart"}
        additionalClasses="invert-btn"
        onClick={addToCart}
      />
    </ProductItemContainer>
  );
}

export default ProductItem;
