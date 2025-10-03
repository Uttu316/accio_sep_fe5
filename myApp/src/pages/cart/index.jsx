import { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/cartContentx";
import styles from "./cart.module.css";
import PageWrapper from "../../components/PageWrapper";

const CartPage = () => {
  const { cart, cartLength, removeFromCart } = useContext(CartContext);

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price, 0),
    [cartLength]
  );

  return (
    <PageWrapper>
      <div className={styles.cartContainer}>
        {cartLength === 0 ? (
          <p className={styles.emptyCart}>No items in cart</p>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.buyNowButton}>Pay Now Rs.{total}</button>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default CartPage;
