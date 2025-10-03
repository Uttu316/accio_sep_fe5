import PageWrapper from "../../components/PageWrapper";
import ProductsHeader from "../../components/ProductHeader";
import ProductsContainer from "../../components/ProductsContainer";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <PageWrapper className={styles.productPage}>
      <ProductsContainer />
    </PageWrapper>
  );
};
export default ProductsPage;
