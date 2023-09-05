import { CategoryListContainer } from "./category-list.styles";

import Category from "../category/category.component";

type CategoryType = {
  id: number;
  title: string;
  imageUrl: string;
};

type CategoryListInputType = {
  categories: Array<CategoryType>;
};

function CategoryList({ categories }: CategoryListInputType) {
  return (
    <CategoryListContainer>
      {categories.map((category: CategoryType) => (
        <Category key={category.id} category={category} />
      ))}
    </CategoryListContainer>
  );
}

export default CategoryList;
