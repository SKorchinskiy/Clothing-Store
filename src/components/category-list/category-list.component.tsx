import { CategoryListContainer } from "./category-list.styles";

import Category, { type CategoryType } from "../category/category.component";

type CategoryListProps = {
  categories: CategoryType[];
};

function CategoryList({ categories }: CategoryListProps) {
  return (
    <CategoryListContainer>
      {categories.map((category: CategoryType) => (
        <Category key={category.id} category={category} />
      ))}
    </CategoryListContainer>
  );
}

export default CategoryList;
