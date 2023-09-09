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
import type {
  CategoryType as Category,
  CategoryWithoutItems,
} from "../components/category/category.component";
import { ProductType } from "../components/product-item/product-item.component";

export type FirebaseOptions = {
  limit?: number;
};

export async function getProductsFromCategory(
  category: string,
  options = {} as FirebaseOptions
): Promise<Omit<Category, "imageUrl"> | Error> {
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
    const items = querySnaphot.docs.map((doc) => doc.data() as ProductType);
    const categoryId = await getCategoryIdByName(category);
    if (!categoryId) throw new Error();
    return {
      id: categoryId,
      title: category,
      items,
    };
  } catch (error) {
    console.log("An error occured!", error);
    return error as Error;
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
    return categoryDoc.id;
  } catch (error) {
    console.log("An error occured!", error);
  }
}

export async function getAllCategoriesProducts(limit: number) {
  try {
    const categories = await getProductCategories();
    const categoriesDataPromises = categories.map(({ title }) =>
      getProductsFromCategory(title, { limit })
    );
    const data = await Promise.all(categoriesDataPromises);
    return data;
  } catch (error) {
    console.log("An error occured!", error);
    return error as Error;
  }
}

export async function getProductCategories(): Promise<CategoryWithoutItems[]> {
  const path: [Firestore, string] = [db, "categories"];
  const categoriesCollectionRef = collection(...path);
  const q = query(categoriesCollectionRef);
  const querySnaphot = await getDocs(q);
  const categories: CategoryWithoutItems[] = querySnaphot.docs.map(
    (doc) => doc.data() as CategoryWithoutItems
  );
  return categories;
}
