import "./shop.styles.scss";

import { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";

import ProductItem from "../../components/product-item/product-item.component";

function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
