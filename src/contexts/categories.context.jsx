import { getDocumentsFromCollection } from "../configs/firebase.config.js";

import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext({
  categories: {},
});

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesData = async () => {
      const categoriesData = await getDocumentsFromCollection("categories");
      const categoriesMap = {};
      categoriesData.forEach(
        ({ categoryId, title, items }) =>
          (categoriesMap[title] = { categoryId, title, items })
      );
      setCategories(categoriesMap);
    };

    getCategoriesData();
  }, []);

  const value = { categories, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
