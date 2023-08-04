import "./sign-up-form.styles.scss";

import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormInput = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formInput, setFormInput] = useState(defaultFormInput);

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up-form-container">
      <div className="sign-up-form-header">
        <h3>I don't have an account</h3>
        <p>Sign Up with your email and password</p>
      </div>
      <form className="sign-up-form" onSubmit={onFormSubmit}>
        <FormInput
          label="name"
          type="text"
          name="name"
          value={formInput.name}
          placeholder="enter a name"
          onChange={onFormInputChange}
        />
        <FormInput
          label="email"
          type="email"
          name="email"
          value={formInput.email}
          placeholder="enter an email"
          onChange={onFormInputChange}
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={formInput.password}
          placeholder="enter a password"
          onChange={onFormInputChange}
        />
        <FormInput
          label="confirm password"
          type="password"
          name="confirmPassword"
          value={formInput.confirmPassword}
          placeholder="confirm a password"
          onChange={onFormInputChange}
        />
        <Button value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUpForm;
