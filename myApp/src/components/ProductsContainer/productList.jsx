import styles from "./productsContainer.module.css";
import ProductCard from "./productCard";
import ProductsFilter from "./ProdcutsFilter";
import { useMemo, useState } from "react";
const ProductList = ({ products }) => {
  const [category, selectCategory] = useState("all");

  const [count, setCount] = useState(0);

  console.log("Product List Render");

  const productsToShow = useMemo(() => {
    console.log("Filter Calculation");
    return category !== "all"
      ? products.filter((item) => item.category === category)
      : products;
  }, [category, products]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Update Count{count}</button>
      <ProductsFilter category={category} selectCategory={selectCategory} />
      <div className={styles.productsListBox}>
        {productsToShow.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
