import { AuthBody, AuthContainer } from "./auth.styles";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function Auth() {
  return (
    <AuthContainer>
      <AuthBody>
        <SignInForm />
        <SignUpForm />
      </AuthBody>
    </AuthContainer>
  );
}

export default Auth;
