import "./auth.styles.scss";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function Auth() {
  return (
    <div className="auth-container">
      <div className="auth-body-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
}

export default Auth;
