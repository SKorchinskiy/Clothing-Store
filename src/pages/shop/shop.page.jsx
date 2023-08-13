import { CategoriesContainer } from "./shop.styles";

import { getAllCategoriesProducts } from "../../utils/firebase.utils";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../redux/selectors/categories.selector";
import { setCategoriesAction } from "../../redux/actions/categories/categories.action";

import CategoryPreview from "../../components/category-preview/category-preview.component";

function Shop() {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  useEffect(() => {
    const getCategoriesData = async () => await getAllCategoriesProducts(5);
    getCategoriesData().then((data) => dispatch(setCategoriesAction(data)));
  }, [dispatch]);

  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return (
          <CategoryPreview key={category.categoryId} category={category} />
        );
      })}
    </CategoriesContainer>
  );
}

export default Shop;
