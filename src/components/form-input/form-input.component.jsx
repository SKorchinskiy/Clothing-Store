import "./form-input.styles.scss";

function FormInput({ label, name, type, value, placeholder, onChange }) {
  return (
    <div className="form-input-container">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
