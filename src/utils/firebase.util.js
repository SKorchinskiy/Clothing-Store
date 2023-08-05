import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAg3b7jZ-DTcCtuQiBMm51LBpTKHvLxYc0",
  authDomain: "clothing-shop-db-1d68a.firebaseapp.com",
  projectId: "clothing-shop-db-1d68a",
  storageBucket: "clothing-shop-db-1d68a.appspot.com",
  messagingSenderId: "1012226919908",
  appId: "1:1012226919908:web:1a9e5ee881ead44a238bf1",
};

const app = initializeApp(firebaseConfig);

export { app };
