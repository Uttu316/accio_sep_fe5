import styles from "./productheader.module.css";

const ProductHeader = () => {
  return (
    <header className={styles.productHeader}>
      <h1 className={styles.logo}>Logo</h1>
      <nav className={styles.navbar}>
        <a href="/about" className={styles.navitem}>
          About
        </a>
        <a href="/contact" className={styles.navitem}>
          Contact Us
        </a>
        <a href="/cart" className={styles.navitem}>
          Cart
        </a>
      </nav>
    </header>
  );
};
export default ProductHeader;
