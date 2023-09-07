import {
  limit,
  query,
  getDocs,
  collection,
  doc,
  getDoc,
  Firestore,
} from "firebase/firestore";

import { db } from "../configs/firebase.config";

export type Category = {
  categoryId: number;
  title: string;
  items: any[];
};

export type FirebaseOptions = {
  limit?: number;
};

export async function getProductsFromCategory(
  category: string,
  options = {} as FirebaseOptions
): Promise<Category | void> {
  try {
    const path: [Firestore, string, string, string] = [
      db,
      "categories",
      category.toLowerCase(),
      "items",
    ];
    const itemsCollectionRef = collection(...path);
    const q = options.limit
      ? query(itemsCollectionRef, limit(options.limit))
      : query(itemsCollectionRef);
    const querySnaphot = await getDocs(q);
    const items = querySnaphot.docs.map((doc) => doc.data());
    const categoryId = await getCategoryIdByName(category);
    if (!categoryId) throw new Error();
    return {
      categoryId,
      title: category,
      items,
    };
  } catch (error) {
    console.log("An error occured!", error);
  }
}

async function getCategoryIdByName(category: string): Promise<number | void> {
  try {
    const path: [Firestore, string, string] = [
      db,
      "categories",
      category.toLowerCase(),
    ];
    const categoryRef = doc(...path);
    const querySnaphot = await getDoc(categoryRef);
    const categoryDoc = querySnaphot.data();
    if (!categoryDoc) throw new Error();
    return categoryDoc.categoryId;
  } catch (error) {
    console.log("An error occured!", error);
  }
}

export async function getAllCategoriesProducts(limit: number) {
  const categories = await getProductCategories();
  const categoriesDataPromises = categories.map(({ title }) =>
    getProductsFromCategory(title, { limit })
  );
  const data = await Promise.all(categoriesDataPromises);
  return data;
}

async function getProductCategories() {
  const path: [Firestore, string] = [db, "categories"];
  const categoriesCollectionRef = collection(...path);
  const q = query(categoriesCollectionRef);
  const querySnaphot = await getDocs(q);
  return querySnaphot.docs.map((doc) => doc.data());
}
