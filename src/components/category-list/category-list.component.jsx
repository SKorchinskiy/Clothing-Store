import "./category-list.styles.scss";

import Category from "../category/category.component";

function CategoryList({ categories }) {
  return (
    <div className="category-list-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;
