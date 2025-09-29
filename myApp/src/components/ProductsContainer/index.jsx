import { useEffect, useState } from "react";
import styles from "./productsContainer.module.css";
import { api } from "../../services";
import ProductList from "./productList";

const ProductsContainer = () => {
  const [status, setStatus] = useState("loading");
  const [products, setproducts] = useState([]);

  const getProducts = async () => {
    try {
      const data = await api({
        endpoint: "/products",
      });
      setproducts(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  const hasProducts = isDone && products.length !== 0;
  const noProduts = isDone && products.length === 0;

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.productsContainerHeading}>Latest Products</h2>
      {isLoading && (
        <h3 className={styles.productsLoader}>Products Loading...</h3>
      )}
      {isError && (
        <h3 className={styles.productsError}>Something went wrong </h3>
      )}
      {noProduts && (
        <h3 className={styles.productsError}>No product avaialable</h3>
      )}
      {hasProducts && <ProductList products={products} />}
    </div>
  );
};
export default ProductsContainer;
