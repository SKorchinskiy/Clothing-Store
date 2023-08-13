import {
  limit,
  query,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../configs/firebase.config";

export async function getProductsFromCategory(category, options = {}) {
  const path = [db, "categories", category.toLowerCase(), "items"];
  const itemsCollectionRef = collection(...path);
  const q = options.limit
    ? query(itemsCollectionRef, limit(options.limit))
    : query(itemsCollectionRef);
  const querySnaphot = await getDocs(q);
  const items = querySnaphot.docs.map((doc) => doc.data());
  const categoryId = await getCategoryIdByName(category);
  return {
    categoryId,
    title: category,
    items,
  };
}

async function getCategoryIdByName(category) {
  const path = [db, "categories", category.toLowerCase()];
  const categoryRef = doc(...path);
  const q = query(categoryRef);
  const querySnaphot = await getDoc(q);
  return querySnaphot.data().categoryId;
}

export async function getAllCategoriesProducts(limit) {
  const categories = await getProductCategories();
  const categoriesDataPromises = categories.map(({ title }) =>
    getProductsFromCategory(title, { limit })
  );
  const data = await Promise.all(categoriesDataPromises);
  return data;
}

async function getProductCategories() {
  const path = [db, "categories"];
  const categoriesCollectionRef = collection(...path);
  const q = query(categoriesCollectionRef);
  const querySnaphot = await getDocs(q);
  return querySnaphot.docs.map((doc) => doc.data());
}
