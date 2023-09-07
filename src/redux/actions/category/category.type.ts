export enum CATEGORY_ACTION_TYPES {
  FETCH_CURRENT_CATEGORY_START = "category/FETCH_CURRENT_CATEGORY_START",
  FETCH_CURRENT_CATEGORY_SUCCESS = "category/FETCH_CURRENT_CATEGORY_SUCCESS",
  FETCH_CURRENT_CATEGORY_FAILED = "category/FETCH_CURRENT_CATEGORY_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};
