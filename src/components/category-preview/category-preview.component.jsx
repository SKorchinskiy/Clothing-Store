import "./category-preview.styles.scss";

import { Fragment } from "react";
import ProductItem from "../product-item/product-item.component";
import { useNavigate } from "react-router-dom";

function CategoryPreview({ category }) {
  const { title, items } = category;

  const navigate = useNavigate();

  const goToCategory = () => navigate(`/category/${title.toLowerCase()}`);

  return (
    <div className="category-preview-container">
      <h2 onClick={goToCategory}>{title}</h2>
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
