import { Input, FormInputContainer } from "./form-input.styles";

function FormInput({
  id,
  label,
  name,
  type = "text",
  value,
  placeholder,
  required = false,
  onChange,
}) {
  return (
    <FormInputContainer>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        type={type}
        required={required}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormInputContainer>
  );
}

export default FormInput;
