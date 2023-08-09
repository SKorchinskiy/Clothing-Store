import { useNavigate } from "react-router-dom";
import "./category.styles.scss";

function Category({ category: { title, imageUrl } }) {
  const navigate = useNavigate();

  const goToCategory = () => navigate(`/category/${title}`);

  return (
    <div className="category-container" onClick={goToCategory}>
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default Category;
