import "./category-preview.styles.scss";

import { Fragment } from "react";
import ProductItem from "../product-item/product-item.component";

function CategoryPreview({ category }) {
  const { title, items } = category;
  return (
    <div className="category-preview-container">
      <h2>{title}</h2>
      <div className="category-preview-items">
        {items.map((item) => (
          <Fragment key={item.id}>
            <ProductItem product={item}></ProductItem>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
