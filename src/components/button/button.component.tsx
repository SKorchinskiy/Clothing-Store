import { DefaultButton, InvertedButton, GoogleButton } from "./button.styles";
import { MouseEventHandler, PropsWithChildren } from "react";

export enum ButtonType {
  default = "default-btn",
  invert = "invert-btn",
  google = "google-btn",
}

type ButtonProps = {
  type: "button" | "submit";
  buttonType: ButtonType;
  onClick: MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren;

function Button({ children, type, buttonType, onClick }: ButtonProps) {
  const CustomButton = getStyledButtonComponent(buttonType);
  return (
    <CustomButton type={type} onClick={onClick}>
      {children}
    </CustomButton>
  );
}

function getStyledButtonComponent(buttonType: ButtonType = ButtonType.default) {
  return {
    [ButtonType.default]: DefaultButton,
    [ButtonType.invert]: InvertedButton,
    [ButtonType.google]: GoogleButton,
  }[buttonType];
}

export default Button;
