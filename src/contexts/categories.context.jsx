import { getDocumentsFromCollection } from "../configs/firebase.config.js";

import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext({
  categories: {},
});

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesData = async () => {
      const categoriesMap = await getDocumentsFromCollection("categories");
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
