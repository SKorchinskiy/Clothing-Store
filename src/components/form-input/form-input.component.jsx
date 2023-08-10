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
      <label>{label}</label>
      <Input
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
