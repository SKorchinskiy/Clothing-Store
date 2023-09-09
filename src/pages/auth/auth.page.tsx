import { AuthBody, AuthContainer } from "./auth.styles";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/user.selector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

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
