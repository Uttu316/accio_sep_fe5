import styles from "./productsContainer.module.css";
import ProductCard from "./productCard";
import ProductsFilter from "./ProdcutsFilter";
import { useState } from "react";
const ProductList = ({ products }) => {
  const [category, selectCategory] = useState("all");

  return (
    <div>
      <ProductsFilter selectCategory={selectCategory} />
      <div className={styles.productsListBox}>
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
