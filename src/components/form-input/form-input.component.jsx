import { Input, FormInputContainer } from "./form-input.styles";

function FormInput({
  label,
  name,
  type,
  value,
  placeholder,
  required,
  onChange,
}) {
  return (
    <FormInputContainer>
      <label htmlFor={name}>{label}</label>
      <Input
        id={name}
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
