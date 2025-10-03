import { useNavigate } from "react-router";
import styles from "./productsContainer.module.css";
import { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/cartContentx";
const ProductCard = ({ product }) => {
  const { image, title, description, rating, price, id } = product;

  const { addToCart, cartLength, removeFromCart, isInCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`/product/${id}`);
  };

  const onAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
  };
  const onRemove = (e) => {
    e.stopPropagation();
    removeFromCart(id);
  };

  const inCart = useMemo(() => isInCart(id), [cartLength]);
  return (
    <div className={styles.productCard} onClick={onProductClick}>
      <img src={image} alt={title} className={styles.productImage} />
      <div className={styles.productCardContent}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.productRating}>Rating: {rating.rate}/5</div>
        <div className={styles.productPrice}>${price}</div>
      </div>
      {!inCart && (
        <button onClick={onAdd} className={styles.addToCartButton}>
          Add to Cart
        </button>
      )}
      {inCart && (
        <button onClick={onRemove} className={styles.removeFromCartButton}>
          Remove from Cart
        </button>
      )}
    </div>
  );
};
export default ProductCard;
