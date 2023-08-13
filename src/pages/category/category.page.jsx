import {
  CategoryPreviewItems,
  CategoryPreviewContainer,
} from "./category.styles";

import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";

import ProductItem from "../../components/product-item/product-item.component";

function Category() {
  const { title, items } = useLoaderData();
  return (
    <CategoryPreviewContainer>
      <h2>{title}</h2>
      <CategoryPreviewItems>
        {items.map((item) => (
          <Fragment key={item.id}>
            <ProductItem product={item}></ProductItem>
          </Fragment>
        ))}
      </CategoryPreviewItems>
    </CategoryPreviewContainer>
  );
}

export default Category;
