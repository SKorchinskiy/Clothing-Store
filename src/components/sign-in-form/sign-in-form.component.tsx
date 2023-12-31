import {
  SignInOptions,
  SignInFormBody,
  SignInFormHeader,
  SignInFormContainer,
} from "./sign-in-form.styles";

import { useState } from "react";

import Button, { ButtonType } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useDispatch } from "react-redux";

import {
  startEmailSignIn,
  startGoogleSignIn,
} from "../../redux/actions/user/user.action";

const defaultFormInput = {
  email: "",
  password: "",
};

function SignInForm() {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState(defaultFormInput);

  const onFormSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { email, password } = formInput;
    dispatch(startEmailSignIn(email, password));
  };

  const signInWithGoogle = () => {
    dispatch(startGoogleSignIn());
  };

  const onFormInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <SignInFormContainer aria-label="sign-in">
      <SignInFormHeader>
        <h3>I already have an account</h3>
        <p>Sign in with your email and password</p>
      </SignInFormHeader>
      <SignInFormBody>
        <FormInput
          id={"sign-in-email"}
          label="email"
          name="email"
          type="email"
          value={formInput.email}
          placeholder="enter an email"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
          id={"sign-in-password"}
          label="password"
          name="password"
          type="password"
          value={formInput.password}
          placeholder="enter a password"
          required={true}
          onChange={onFormInputChange}
        />
        <SignInOptions>
          <Button
            type="button"
            buttonType={ButtonType.default}
            onClick={onFormSubmit}
          >
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={ButtonType.google}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </SignInOptions>
      </SignInFormBody>
    </SignInFormContainer>
  );
}

export default SignInForm;
