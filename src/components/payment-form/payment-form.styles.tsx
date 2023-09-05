import styled from "styled-components";

import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
`;

export const CardElementContainer = styled(CardElement)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  height: 30px;
`;
