import { SignUpFormContainer, SignUpFormHeader } from "./sign-up-form.styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
    <div>
      <SignUpFormHeader>
        <h3>I don't have an account</h3>
        <p>Sign Up with your email and password</p>
      </SignUpFormHeader>
      <SignUpFormContainer onSubmit={onFormSubmit}>
        <FormInput
          label="name"
          type="text"
          name="name"
          value={formInput.name}
          placeholder="enter a name"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
          label="email"
          type="email"
          name="email"
          value={formInput.email}
          placeholder="enter an email"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={formInput.password}
          placeholder="enter a password"
          required={true}
          onChange={onFormInputChange}
        />
        <FormInput
          label="confirm password"
          type="password"
          name="confirmPassword"
          value={formInput.confirmPassword}
          placeholder="confirm a password"
          required={true}
          onChange={onFormInputChange}
        />
        <Button type="submit" value="Sign Up" additionalClasses="default-btn" />
      </SignUpFormContainer>
    </div>
  );
}

export default SignUpForm;
