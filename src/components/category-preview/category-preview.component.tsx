import {
  CategoryPreviewItems,
  CategoryPreviewContainer,
} from "./category-preview.styles";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import ProductItem, {
  ProductType,
} from "../product-item/product-item.component";

type CategoryPreviewType = {
  id: number;
  title: string;
  items: Array<ProductType>;
};

type CategoryPreviewInputType = {
  category: CategoryPreviewType;
};

function CategoryPreview({ category }: CategoryPreviewInputType) {
  const { title, items } = category;

  const navigate = useNavigate();

  const goToCategory = () => navigate(`/category/${title.toLowerCase()}`);

  return (
    <CategoryPreviewContainer>
      <h2>
        <span onClick={goToCategory}>{title.toUpperCase()}</span>
      </h2>
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

export default CategoryPreview;
