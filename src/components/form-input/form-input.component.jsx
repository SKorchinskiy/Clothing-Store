import { Input, FormInputContainer } from "./form-input.styles";

function FormInput({
  label,
  prefix,
  name,
  type,
  value,
  placeholder,
  required,
  onChange,
}) {
  return (
    <FormInputContainer>
      <label htmlFor={`${prefix}-${name}`}>{label}</label>
      <Input
        id={`${prefix}-${name}`}
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
