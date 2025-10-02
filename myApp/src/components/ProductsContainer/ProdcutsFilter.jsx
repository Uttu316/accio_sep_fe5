import styles from "./productsContainer.module.css";
const ProductsFilter = ({ selectCategory, category }) => {
  const onFilterItem = (category) => {
    selectCategory(category);
  };
  return (
    <div className={styles.productsFilter}>
      <span>Filter By:</span>
      <FilterItem
        selectedCategory={category}
        onFilterItem={onFilterItem}
        value={"all"}
        label={"All"}
      />
      <FilterItem
        onFilterItem={onFilterItem}
        value={"men's clothing"}
        label={"Men"}
        selectedCategory={category}
      />
      <FilterItem
        onFilterItem={onFilterItem}
        value={"women's clothing"}
        label={"Women"}
        selectedCategory={category}
      />
      <FilterItem
        onFilterItem={onFilterItem}
        value={"electronics"}
        label={"Electronics"}
        selectedCategory={category}
      />
      <FilterItem
        onFilterItem={onFilterItem}
        value={"jewelery"}
        label={"Jewelery"}
        selectedCategory={category}
      />
    </div>
  );
};
export default ProductsFilter;

const FilterItem = ({ onFilterItem, value, label, selectedCategory }) => {
  return (
    <button
      className={`${styles.filterItem} ${
        selectedCategory === value ? styles.selectedFilter : ""
      } `}
      onClick={() => onFilterItem(value)}
    >
      {label}
    </button>
  );
};
