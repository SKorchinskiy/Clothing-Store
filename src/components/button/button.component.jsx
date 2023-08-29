import { DefaultButton, InvertedButton, GoogleButton } from "./button.styles";

function Button({ children, type, buttonType, onClick }) {
  const CustomButton = getStyledButtonComponent(buttonType);
  return (
    <CustomButton type={type} onClick={onClick}>
      {children}
    </CustomButton>
  );
}

function getStyledButtonComponent(buttonType = "default-btn") {
  return {
    "default-btn": DefaultButton,
    "invert-btn": InvertedButton,
    "google-btn": GoogleButton,
  }[buttonType];
}

export default Button;
