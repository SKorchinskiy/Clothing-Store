import "./sign-in-form.styles.scss";

import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormInput = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formInput, setFormInput] = useState(defaultFormInput);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
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
          onChange={onFormInputChange}
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={formInput.password}
          placeholder="enter a password"
          onChange={onFormInputChange}
        />
        <Button type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default SignInForm;
