import ProductsHeader from "../../components/ProductHeader";
import ProductsContainer from "../../components/ProductsContainer";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.productPage}>
      <ProductsHeader />
      <ProductsContainer />
    </div>
  );
};
export default ProductsPage;
