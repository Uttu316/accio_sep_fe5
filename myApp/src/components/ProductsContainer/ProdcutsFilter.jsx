import styles from "./productsContainer.module.css";
const ProductsFilter = ({ selectCategory }) => {
  const onFilterItem = (category) => {
    selectCategory(category);
  };
  return (
    <div className={styles.productsFilter}>
      <span>Filter By:</span>
      <FilterItem
        onFilterItem={onFilterItem}
        value={"men's clothing"}
        label={"Men"}
      />
      <FilterItem
        onFilterItem={onFilterItem}
        value={"women's clothing"}
        label={"Women"}
      />
      <FilterItem
        onFilterItem={onFilterItem}
        value={"electronics"}
        label={"Electronics"}
      />
      <FilterItem
        onFilterItem={onFilterItem}
        value={"jwelery"}
        label={"Jwelery"}
      />
    </div>
  );
};
export default ProductsFilter;

const FilterItem = ({ onFilterItem, value, label }) => {
  return (
    <button className={styles.filterItem} onClick={() => onFilterItem(value)}>
      {label}
    </button>
  );
};
