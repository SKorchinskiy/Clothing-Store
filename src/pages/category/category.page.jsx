import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import ProductItem from "../../components/product-item/product-item.component";

function Category() {
  const {
    category: { title },
    items,
  } = useLoaderData();
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

export default Category;
