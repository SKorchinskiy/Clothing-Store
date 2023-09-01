import {
  SignUpFormContainer,
  SignUpFormHeader,
  SignUpFormBody,
} from "./sign-up-form.styles";

import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useDispatch } from "react-redux";
import { startEmailSignUp } from "../../redux/actions/user/user.action";

const defaultFormInput = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState(defaultFormInput);

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = formInput;
    if (password !== confirmPassword) {
      return alert(`Confirmation password doesn't match the original one!`);
    }
    dispatch(startEmailSignUp({ name, email, password }));
  };

  return (
    <SignUpFormContainer aria-label="sign-up">
      <SignUpFormHeader>
        <h3>I don't have an account</h3>
        <p>Sign Up with your email and password</p>
      </SignUpFormHeader>
      <SignUpFormBody>
        <FormInput
          id={"sign-up-name"}
          label="name"
          type="text"
          name="name"
          value={formInput.name}
          placeholder="enter a name"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
          id={"sign-up-email"}
          label="email"
          type="email"
          name="email"
          value={formInput.email}
          placeholder="enter an email"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
          id={"sign-up-password"}
          label="password"
          type="password"
          name="password"
          value={formInput.password}
          placeholder="enter a password"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
          id={"sign-up-confirm-password"}
          label="confirm password"
          type="password"
          name="confirmPassword"
          value={formInput.confirmPassword}
          placeholder="confirm a password"
          required={true}
          onChange={onFormInputChange}
        />
        <Button type="button" buttonType="default-btn" onClick={onFormSubmit}>
          Sign Up
        </Button>
      </SignUpFormBody>
    </SignUpFormContainer>
  );
}

export default SignUpForm;
