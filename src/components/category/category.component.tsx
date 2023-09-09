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
};

type CategoryProps = {
  category: CategoryType;
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
