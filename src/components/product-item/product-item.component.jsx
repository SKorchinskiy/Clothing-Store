import "./product-item.styles.scss";

import Button from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

function ProductItem({ product }) {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-item-container">
      <img src={imageUrl} alt={name} />
      <div className="product-item-details">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <Button
        type="button"
        value={"Add To Cart"}
        additionalClasses="invert-btn"
        onClick={addToCart}
      />
    </div>
  );
}

export default ProductItem;
