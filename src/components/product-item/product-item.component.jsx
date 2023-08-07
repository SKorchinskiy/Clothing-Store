import "./product-item.styles.scss";

import Button from "../button/button.component";

function ProductItem({ product }) {
  const { name, imageUrl, price } = product;
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
      />
    </div>
  );
}

export default ProductItem;
