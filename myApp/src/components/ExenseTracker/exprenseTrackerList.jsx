import styles from "./expenseTracker.module.css";
import ExpenseTrackerListItem from "./expentrackerListItem";

const ExpenseTrackerList = ({ editExpense, expenses, onEdit, setExpenses }) => {
  const onDelete = (id) => {
    setExpenses((currExpenses) => currExpenses.filter((i) => i.id !== id));
  };

  const hasExpenses = expenses.length !== 0;
  return (
    <div className={styles.expense_tracker_list}>
      {!hasExpenses && (
        <h3 className={`${styles.expense_tracker_empty} `}>No Expense yet</h3>
      )}
      {hasExpenses &&
        expenses.map((item, index) => (
          <ExpenseTrackerListItem
            key={item.id} // unique key to every item
            editExpense={editExpense}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
            index={index}
          />
        ))}
    </div>
  );
};

export default ExpenseTrackerList;
