import { Link, NavLink } from "react-router";
import styles from "./productheader.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContentx";

const ProductHeader = () => {
  const { cartLength } = useContext(CartContext);

  return (
    <header className={styles.productHeader}>
      <h1 className={styles.logo}>
        <Link to="/">Logo</Link>
      </h1>
      <nav className={styles.navbar}>
        <NavItem path={"/products"} label={"Prodcuts"} />
        <NavItem
          path="/cart"
          label={"Cart"}
          count={cartLength <= 9 ? cartLength : "9+"}
        />
        <NavItem path={"/about"} label={"About"} />
        <NavItem path="/contact" label={"Contact Us"} />
      </nav>
    </header>
  );
};

const NavItem = ({ path, label, count }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.navitem} ${isActive ? styles.navActive : ""}`
      }
    >
      {label}
      {!!count && <span className={styles.count}>{count}</span>}
    </NavLink>
  );
};
export default ProductHeader;
