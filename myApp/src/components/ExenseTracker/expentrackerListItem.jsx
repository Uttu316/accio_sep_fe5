import { MdDelete as DltIcon, MdModeEdit as EditIcon } from "react-icons/md";
import styles from "./expenseTracker.module.css";
const ExpenseTrackerListItem = ({
  editExpense,
  item,
  index,
  onDelete,
  onEdit,
}) => {
  const isEditMode = editExpense !== null;
  const currEditItem = isEditMode && editExpense.id === item.id;
  return (
    <div
      className={`${styles.expense_tracker_list_item} ${
        currEditItem ? styles.isEditItem : ""
      }`}
    >
      <div className={styles.expense_tracker_item_details}>
        <p className={styles.expense_tracker_item_amount}>{item.amount}</p>
        <p className={styles.expense_tracker_item_category}>{item.category}</p>
      </div>
      <div className={styles.expense_tracker_item_right}>
        <p className={styles.expense_tracker_item_time}>
          {new Date(item.time).toLocaleDateString()}{" "}
          {new Date(item.time).toLocaleTimeString()}
        </p>
        <div className={styles.expense_tracker_item_actions}>
          <button
            disabled={isEditMode}
            onClick={() => onDelete(item.id)}
            className={`${styles.expense_tracker_item_btn} ${styles.dlt_btn}`}
          >
            <DltIcon />
          </button>
          <button
            disabled={isEditMode}
            onClick={() => onEdit(item, index)}
            className={`${styles.expense_tracker_item_btn} ${styles.edit_btn}`}
          >
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerListItem;
