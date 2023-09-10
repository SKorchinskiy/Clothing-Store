import {
  CategoryPreviewItems,
  CategoryPreviewContainer,
} from "./category-preview.styles";

import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductItem from "../product-item/product-item.component";

import type { CategoryType } from "../category/category.component";
import useResolution, { ResolutionType } from "../../hooks/useResolution.hook";

type CategoryPreviewProps = {
  category: CategoryType;
};

function CategoryPreview({ category: { title, items } }: CategoryPreviewProps) {
  const { resolution } = useResolution();
  const [products, setProducts] = useState(items);

  const navigate = useNavigate();

  const goToCategory = () => navigate(`/category/${title.toLowerCase()}`);

  useEffect(() => {
    switch (resolution) {
      case ResolutionType.small: {
        setProducts(items.slice(0, 3));
        break;
      }
      case ResolutionType.medium: {
        setProducts(items.slice(0, 4));
        break;
      }
      case ResolutionType.large: {
        setProducts(items.slice(0, 6));
        break;
      }
      default: {
        setProducts(items.slice(0, 3));
      }
    }
  }, [resolution, items]);

  return (
    <CategoryPreviewContainer>
      <h2>
        <span onClick={goToCategory}>{title.toUpperCase()}</span>
      </h2>
      <CategoryPreviewItems>
        {products.map((item) => (
          <Fragment key={item.id}>
            <ProductItem product={item}></ProductItem>
          </Fragment>
        ))}
      </CategoryPreviewItems>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
