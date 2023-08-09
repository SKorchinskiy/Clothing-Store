import "./shop.styles.scss";

import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useNavigate } from "react-router-dom";

function Shop() {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="categories-container">
      {Object.keys(categories).map((categoryName) => {
        const category = categories[categoryName];
        return (
          <CategoryPreview key={category.categoryId} category={category} />
        );
      })}
    </div>
  );
}

export default Shop;
