import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAg3b7jZ-DTcCtuQiBMm51LBpTKHvLxYc0",
  authDomain: "clothing-shop-db-1d68a.firebaseapp.com",
  projectId: "clothing-shop-db-1d68a",
  storageBucket: "clothing-shop-db-1d68a.appspot.com",
  messagingSenderId: "1012226919908",
  appId: "1:1012226919908:web:1a9e5ee881ead44a238bf1",
};

export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);

const googleAuth = new GoogleAuthProvider();
googleAuth.setCustomParameters({
  prompt: "select_account",
});

export async function signUpUserByEmail(userData) {
  try {
    const { name, email, password } = userData;
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await sendEmailVerification(auth.currentUser);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    return user;
  } catch (error) {
    console.log(`An error occured while registering user! ${error.message}`);
  }
}

export async function signInUserByEmail(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log(`An error occured! ${error.message}`);
  }
}

export async function signOutUser() {
  await signOut(auth);
}

export async function signInUserWithGoogle() {
  const { user } = await signInWithPopup(auth, googleAuth);
  return user;
}