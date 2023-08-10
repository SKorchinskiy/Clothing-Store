import { CategoriesContainer } from "./shop.styles";

import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

function Shop() {
  const { categories } = useContext(CategoriesContext);

  return (
    <CategoriesContainer>
      {Object.keys(categories).map((categoryName) => {
        const category = categories[categoryName];
        return (
          <CategoryPreview key={category.categoryId} category={category} />
        );
      })}
    </CategoriesContainer>
  );
}

export default Shop;
