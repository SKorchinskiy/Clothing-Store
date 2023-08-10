import { CategoryListContainer } from "./category-list.styles";

import Category from "../category/category.component";

function CategoryList({ categories }) {
  return (
    <CategoryListContainer>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </CategoryListContainer>
  );
}

export default CategoryList;
