import { CategoriesContainer } from "./shop.styles";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCategories,
  selectIsLoading,
} from "../../redux/selectors/categories.selector";
import { fetchCategoriesStart } from "../../redux/actions/categories/categories.action";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Loader from "../../components/loader/loader.component";

function Shop() {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <CategoriesContainer>
      {isLoading ? (
        <Loader />
      ) : (
        categories.map((category) => {
          return (
            <CategoryPreview key={category.categoryId} category={category} />
          );
        })
      )}
    </CategoriesContainer>
  );
}

export default Shop;
