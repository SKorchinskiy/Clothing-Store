import { CategoriesContainer } from "./shop.styles";

import { getDocumentsFromCollection } from "../../configs/firebase.config";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { categoriesSelector } from "../../redux/selectors/categories.selector";
import { setCategoriesAction } from "../../redux/actions/categories/categories.action";

import CategoryPreview from "../../components/category-preview/category-preview.component";

function Shop() {
  const { categories } = useSelector(categoriesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesData = async () => {
      const categoriesMap = await getDocumentsFromCollection("categories");
      dispatch(setCategoriesAction(categoriesMap));
    };

    getCategoriesData();
  }, [dispatch]);

  return (
    <CategoriesContainer>
      {Object.keys(categories).map((categoryName) => {
        const category = categories[categoryName];
        return (
          <CategoryPreview key={category.categoryId} category={category} />
        );
      })}
    </CategoriesContainer>
  );
}

export default Shop;
