import {
  SignInOptions,
  SignInFormHeader,
  SignInFormContainer,
} from "./sign-in-form.styles";

import {
  signInUserByEmail,
  signInUserWithGoogle,
} from "../../configs/firebase.config";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormInput = {
  email: "",
  password: "",
};

function SignInForm() {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState(defaultFormInput);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formInput;
    const user = await signInUserByEmail(email, password);
    if (user) {
      navigate("/home");
    }
  };

  const signInWithGoogle = async () => {
    const user = await signInUserWithGoogle();
    if (user) {
      navigate("/home");
    }
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
