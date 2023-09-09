import { ProductType } from "../product-item/product-item.component";
import {
  BackgroundImage,
  CategoryContainer,
  CategoryBodyContainer,
} from "./category.styles";

import { useNavigate } from "react-router-dom";

export type CategoryType = {
  id: number;
  title: string;
  imageUrl: string;
  items: ProductType[];
};

export type CategoryWithoutItems = Omit<CategoryType, "items">;

type CategoryProps = {
  category: CategoryWithoutItems;
};

function Category({ category: { title, imageUrl } }: CategoryProps) {
  const navigate = useNavigate();

  const goToCategory = () => navigate(`/category/${title}`);

  return (
    <CategoryContainer onClick={goToCategory}>
      <BackgroundImage $imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
}

export default Category;
