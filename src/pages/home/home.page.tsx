import { useEffect, useState } from "react";
import CategoryList from "../../components/category-list/category-list.component";
import { getProductCategories } from "../../utils/firebase.utils";
import { CategoryWithoutItems } from "../../components/category/category.component";

function Home() {
  const [categories, setCategories] = useState<CategoryWithoutItems[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getProductCategories();
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
}

export default Home;
