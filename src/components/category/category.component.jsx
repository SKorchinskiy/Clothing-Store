import {
  BackgroundImage,
  CategoryContainer,
  CategoryBodyContainer,
} from "./category.styles";

import { useNavigate } from "react-router-dom";

function Category({ category: { title, imageUrl } }) {
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
