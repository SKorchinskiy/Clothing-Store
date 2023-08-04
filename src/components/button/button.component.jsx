import "./button.styles.scss";

function Button({ value, type }) {
  return (
    <button type={type} className="button-container">
      {value}
    </button>
  );
}

export default Button;
