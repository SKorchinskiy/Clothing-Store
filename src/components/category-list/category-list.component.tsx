import { CategoryListContainer } from "./category-list.styles";

import Category, {
  type CategoryWithoutItems,
} from "../category/category.component";

type CategoryListProps = {
  categories: CategoryWithoutItems[];
};

function CategoryList({ categories }: CategoryListProps) {
  return (
    <CategoryListContainer>
      {categories.map((category: CategoryWithoutItems) => (
        <Category key={category.id} category={category} />
      ))}
    </CategoryListContainer>
  );
}

export default CategoryList;
