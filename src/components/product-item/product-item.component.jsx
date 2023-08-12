import {
  ProductItemDetails,
  ProductItemContainer,
} from "./product-item.styles";

import Button from "../button/button.component";

import { cartSelector } from "../../redux/selectors/cart.selector";
import { addToCartAction } from "../../redux/actions/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

function ProductItem({ product }) {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);

  const addToCart = () => dispatch(addToCartAction(cart, product));

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
