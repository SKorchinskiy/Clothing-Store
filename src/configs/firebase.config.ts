import { initializeApp, FirebaseOptions } from "firebase/app";

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
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { SignInUser, SignUpUser } from "../redux/actions/user/user.action";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAg3b7jZ-DTcCtuQiBMm51LBpTKHvLxYc0",
  authDomain: "clothing-shop-db-1d68a.firebaseapp.com",
  projectId: "clothing-shop-db-1d68a",
  storageBucket: "clothing-shop-db-1d68a.appspot.com",
  messagingSenderId: "1012226919908",
  appId: "1:1012226919908:web:1a9e5ee881ead44a238bf1",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

const googleAuth = new GoogleAuthProvider();
googleAuth.setCustomParameters({
  prompt: "select_account",
});

export async function signUpUserByEmail(
  userData: SignUpUser
): Promise<User | void> {
  try {
    const { name, email, password } = userData;
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await sendEmailVerification(user);
    await updateProfile(user, {
      displayName: name,
    });

    return user;
  } catch (error) {
    console.log(`An error occured while registering user! ${error}`);
  }
}

export async function signInUserByEmail({
  email,
  password,
}: SignInUser): Promise<User | void> {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log(`An error occured! ${error}`);
  }
}

export async function signInUserWithGoogle(): Promise<User | void> {
  try {
    const { user } = await signInWithPopup(auth, googleAuth);
    return user;
  } catch (error) {
    console.log(`An error occured! ${error}`);
  }
}

export async function signOutUser(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(`An error occured while signing out! ${error}`);
  }
}

export function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
}
