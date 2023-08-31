import {
  SignInOptions,
  SignInFormBody,
  SignInFormHeader,
  SignInFormContainer,
} from "./sign-in-form.styles";

import { useState } from "react";

import Button from "../button/button.component";
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

  const onFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formInput;
    dispatch(startEmailSignIn(email, password));
  };

  const signInWithGoogle = () => {
    dispatch(startGoogleSignIn());
  };

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <SignInFormContainer>
      <SignInFormHeader>
        <h3>I already have an account</h3>
        <p>Sign in with your email and password</p>
      </SignInFormHeader>
      <SignInFormBody>
        <FormInput
          label="email"
          prefix="signin"
          name="email"
          type="email"
          value={formInput.email}
          placeholder="enter an email"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
          label="password"
          prefix="signin"
          name="password"
          type="password"
          value={formInput.password}
          placeholder="enter a password"
          required={true}
          onChange={onFormInputChange}
        />
        <SignInOptions>
          <Button type="button" buttonType="default-btn" onClick={onFormSubmit}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType="google-btn"
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
