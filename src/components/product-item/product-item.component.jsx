import {
  ProductItemDetails,
  ProductItemContainer,
} from "./product-item.styles";

import Button from "../button/button.component";

import { selectCartItems } from "../../redux/selectors/cart.selector";
import { addToCartAction } from "../../redux/actions/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

function ProductItem({ product }) {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addToCart = () => dispatch(addToCartAction(cartItems, product));

  return (
    <ProductItemContainer>
      <img src={imageUrl} alt={name} />
      <ProductItemDetails>
        <span>{name}</span>
        <span>${price}</span>
      </ProductItemDetails>
      <Button type="button" buttonType="invert-btn" onClick={addToCart}>
        Add To Cart
      </Button>
    </ProductItemContainer>
  );
}

export default ProductItem;
