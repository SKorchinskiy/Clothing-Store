import {
  PaymentFormContainer,
  CardElementContainer,
} from "./payment-form.styles";

import Button from "../button/button.component";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/user.selector";

export default function PaymentForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const name = currentUser?.displayName ?? "Guest";
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement("card"),
        billing_details: {
          name,
        },
      },
    });
  };

  return (
    <PaymentFormContainer>
      <CardElementContainer />
      <Button buttonType="default-btn" onClick={paymentHandler}>
        Pay now
      </Button>
    </PaymentFormContainer>
  );
}
