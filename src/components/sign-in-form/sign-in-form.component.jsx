import {
  SignInOptions,
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
    <div>
      <SignInFormHeader>
        <h3>I already have an account</h3>
        <p>Sign in with your email and password</p>
      </SignInFormHeader>
      <SignInFormContainer onSubmit={onFormSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={formInput.email}
          placeholder="enter an email"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
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
            type="submit"
            value="Sign In"
            additionalClasses="default-btn"
          />
          <Button
            type="button"
            value="Sign In with Google"
            additionalClasses="google-btn"
            onClick={signInWithGoogle}
          />
        </SignInOptions>
      </SignInFormContainer>
    </div>
  );
}

export default SignInForm;
