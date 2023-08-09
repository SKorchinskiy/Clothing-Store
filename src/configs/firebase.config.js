import { initializeApp } from "firebase/app";

import {
  collection,
  doc,
  getDocs,
  getFirestore,
  limit,
  query,
  writeBatch,
} from "firebase/firestore";

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

export async function addDocumentsToCollection(collectionName, dataToAdd) {
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db);
  dataToAdd.forEach((data) => {
    const documentRef = doc(collectionRef, data.title.toLowerCase());
    batch.set(documentRef, { title: data.title, categoryId: data.categoryId });
    const itemsCollection = collection(documentRef, "items");
    data.items.forEach((item) => {
      const subDocRef = doc(itemsCollection, item.name);
      batch.set(subDocRef, item);
    });
  });
  await batch.commit();
}

export async function getDocumentsFromCollection(collectionName) {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);
  const querySnaphot = await getDocs(q);
  const categories = querySnaphot.docs.map((doc) => doc.data());
  const categoriesData = categories.map((category) =>
    getItemsFromCategories(category, 5)
  );
  const categoriesMap = {};
  for await (const {
    category: { title, categoryId },
    items,
  } of categoriesData) {
    categoriesMap[title.toLowerCase()] = { categoryId, title, items };
  }
  return categoriesMap;
}

export async function getItemsFromCategories(category, max) {
  const itemsCollectionRef = collection(
    db,
    "categories",
    category.title.toLowerCase(),
    "items"
  );
  const q = max
    ? query(itemsCollectionRef, limit(max))
    : query(itemsCollectionRef);
  const querySnaphot = await getDocs(q);
  return { category, items: querySnaphot.docs.map((doc) => doc.data()) };
}

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

export function observeStateChange(cb) {
  return onAuthStateChanged(auth, cb);
}
