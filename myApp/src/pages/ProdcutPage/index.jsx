import { useParams, Link } from "react-router";
import ProductHeader from "../../components/ProductHeader";
import { useEffect, useState } from "react";
import { api } from "../../services";
import styles from "./product.module.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const data = await api({
        endpoint: `/products/${productId}`,
      });

      setProduct(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (productId) {
      getProduct();
    }
  }, [productId]);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasPrdouct = isDone && product !== null;
  const noProduct = isDone && product === null;

  return (
    <div>
      <ProductHeader />
      {isLoading && <h3 className={styles.loader}>Loading Product...</h3>}
      {isError && (
        <h3 className={styles.error}>
          <p>Something Went wrong</p>{" "}
          <Link to="/products">Checkout other products</Link>
        </h3>
      )}
      {noProduct && (
        <h3 className={styles.noProduct}>
          <p>Product Not Available</p>
          <Link to="/products">Checkout other products</Link>
        </h3>
      )}
      {hasPrdouct && (
        <div className={styles.productContainer}>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.category}>
              <strong>Category:</strong> {product.category}
            </p>
            <p className={styles.price}>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </p>
            <p className={styles.rating}>
              <strong>Rating:</strong> {product.rating.rate} / 5 (
              {product.rating.count} reviews)
            </p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductPage;
