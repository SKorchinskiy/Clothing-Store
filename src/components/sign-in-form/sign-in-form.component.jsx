import "./sign-in-form.styles.scss";

import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  auth,
  signInUserByEmail,
  signInUserWithGoogle,
} from "../../configs/firebase.config";
import { useNavigate } from "react-router-dom";

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
    await signInUserByEmail(email, password);
    if (auth.currentUser) {
      navigate("/home");
    }
  };

  const signInWithGoogle = async () => {
    await signInUserWithGoogle();
    navigate("/home");
  };

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <div className="sign-in-form-container">
      <div className="sign-in-form-header">
        <h3>I already have an account</h3>
        <p>Sign in with your email and password</p>
      </div>
      <form className="sign-in-form" onSubmit={onFormSubmit}>
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
        <div className="sign-in-options">
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
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
