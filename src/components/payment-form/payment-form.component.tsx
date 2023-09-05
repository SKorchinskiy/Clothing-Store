import {
  PaymentFormContainer,
  CardElementContainer,
} from "./payment-form.styles";

import Button, { ButtonType } from "../button/button.component";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/user.selector";

type PaymentFormProps = {
  clientSecret: string;
};

export default function PaymentForm({ clientSecret }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const name = currentUser?.displayName ?? "Guest";
    const cardElement = elements.getElement("card");
    if (cardElement) {
      stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name,
          },
        },
      });
    }
  };

  return (
    <PaymentFormContainer>
      <CardElementContainer />
      <Button
        type="button"
        buttonType={ButtonType.default}
        onClick={paymentHandler}
      >
        Pay now
      </Button>
    </PaymentFormContainer>
  );
}
