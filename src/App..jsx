import router from "./routes/index";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";

import { stripePromise } from "./utils/stripe.utils";
import { Suspense } from "react";
import Loader from "./components/loader/loader.component";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
          </Suspense>
        </Elements>
      </PersistGate>
    </Provider>
  );
}

export default App;
