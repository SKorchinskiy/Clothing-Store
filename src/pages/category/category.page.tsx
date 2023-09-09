import {
  CategoryPreviewItems,
  CategoryPreviewContainer,
} from "./category.styles";

import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectCategoryTitle,
  selectCategoryItems,
  selectIsCategoryLoading,
} from "../../redux/selectors/category.selector";

import ProductItem from "../../components/product-item/product-item.component";
import { fetchCurrentCategoryStart } from "../../redux/actions/category/category.action";
import Loader from "../../components/loader/loader.component";

function Category() {
  const { categoryName } = useParams<string>();
  const dispatch = useDispatch();

  const title = useSelector(selectCategoryTitle);
  const items = useSelector(selectCategoryItems);
  const isLoading = useSelector(selectIsCategoryLoading);

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchCurrentCategoryStart(categoryName));
    }
  }, [categoryName, dispatch]);

  return (
    <CategoryPreviewContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>
            <span>{title.toUpperCase()}</span>
          </h2>
          <CategoryPreviewItems>
            {items.map((item) => (
              <Fragment key={item.id}>
                <ProductItem product={item}></ProductItem>
              </Fragment>
            ))}
          </CategoryPreviewItems>
        </>
      )}
    </CategoryPreviewContainer>
  );
}

export default Category;
