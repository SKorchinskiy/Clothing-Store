import { DefaultButton, InvertedButton, GoogleButton } from "./button.styles";

function Button({ value, type, additionalClasses = "", onClick }) {
  const CustomButton = getStyledButtonComponent(additionalClasses);
  return (
    <CustomButton type={type} onClick={onClick}>
      {value}
    </CustomButton>
  );
}

function getStyledButtonComponent(buttonType) {
  return {
    "default-btn": DefaultButton,
    "invert-btn": InvertedButton,
    "google-btn": GoogleButton,
  }[buttonType];
}

export default Button;
