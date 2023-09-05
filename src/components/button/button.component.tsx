import { DefaultButton, InvertedButton, GoogleButton } from "./button.styles";
import { MouseEventHandler } from "react";

export enum ButtonType {
  default = "default-btn",
  invert = "invert-btn",
  google = "google-btn",
}

type ButtonInput = {
  children: string;
  type: "button" | "submit";
  buttonType: ButtonType;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, type, buttonType, onClick }: ButtonInput) {
  const CustomButton = getStyledButtonComponent(buttonType);
  return (
    <CustomButton type={type} onClick={onClick}>
      {children}
    </CustomButton>
  );
}

function getStyledButtonComponent(buttonType: ButtonType = ButtonType.default) {
  return {
    "default-btn": DefaultButton,
    "invert-btn": InvertedButton,
    "google-btn": GoogleButton,
  }[buttonType];
}

export default Button;
