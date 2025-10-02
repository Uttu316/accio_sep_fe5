import { Link, NavLink } from "react-router";
import styles from "./productheader.module.css";

const ProductHeader = () => {
  return (
    <header className={styles.productHeader}>
      <h1 className={styles.logo}>
        <Link to="/">Logo</Link>
      </h1>
      <nav className={styles.navbar}>
        <NavItem path={"/products"} label={"Prodcuts"} />
        <NavItem path="/cart" label={"Cart"} />
        <NavItem path={"/about"} label={"About"} />
        <NavItem path="/contact" label={"Contact Us"} />
      </nav>
    </header>
  );
};

const NavItem = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.navitem} ${isActive ? styles.navActive : ""}`
      }
    >
      {label}
    </NavLink>
  );
};
export default ProductHeader;
