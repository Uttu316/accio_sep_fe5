import styles from "./productsContainer.module.css";
const ProductCard = ({ product }) => {
  const { image, title, description, rating, price } = product;
  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <div className={styles.productCardContent}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.productRating}>Rating: {rating.rate}/5</div>
        <div className={styles.productPrice}>${price}</div>
      </div>
      <button className={styles.addToCartButton}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
