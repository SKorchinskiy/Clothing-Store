import "./button.styles.scss";

function Button({ value, type, additionalClasses = "", onClick }) {
  return (
    <button
      type={type}
      className={`btn-container ${additionalClasses}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
