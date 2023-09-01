import { categoryFactory } from "./categoryFactory";

const makeNewCategory = categoryFactory();

export const getProductsFromCategory = (categoryName) =>
  Promise.resolve(makeNewCategory(categoryName));

export const getAllCategoriesProducts = (number) => {
  return [makeNewCategory(), makeNewCategory(), makeNewCategory()];
};
