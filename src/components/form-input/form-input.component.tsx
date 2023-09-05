import { ChangeEvent } from "react";
import { Input, FormInputContainer } from "./form-input.styles";

export type FormInputProps = {
  id: string;
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  required: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  id,
  label,
  name,
  type = "text",
  value,
  placeholder,
  required = false,
  onChange,
}: FormInputProps) {
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
