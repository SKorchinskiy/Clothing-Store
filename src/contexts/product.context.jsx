import PRODUCTS from "../seeds/shop-data.json";

import { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
  setProducts: () => [],
});

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
