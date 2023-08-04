import "./category.styles.scss";

function Category({ category: { title, imageUrl } }) {
  return (
    <div className="category-container">
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
