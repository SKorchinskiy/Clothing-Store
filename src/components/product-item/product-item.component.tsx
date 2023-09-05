import {
  ProductItemDetails,
  ProductItemContainer,
} from "./product-item.styles";

import Button, { ButtonType } from "../button/button.component";

import { selectCartItems } from "../../redux/selectors/cart.selector";
import { addToCartAction } from "../../redux/actions/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

export type ProductType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type ProductItemInputType = {
  product: ProductType;
};

function ProductItem({ product }: ProductItemInputType) {
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
      <Button type="button" buttonType={ButtonType.invert} onClick={addToCart}>
        Add To Cart
      </Button>
    </ProductItemContainer>
  );
}

export default ProductItem;
