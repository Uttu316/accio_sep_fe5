import { useState } from "react";
import styles from "./expenseTracker.module.css";
import ExpenseTrackerList from "./exprenseTrackerList";
import ExpenseTrackerInputs from "./expenseInputs";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]); // list to store expenses
  const [editExpense, setEditExpense] = useState(null); // to store editing expense object
  const [amount, setAmount] = useState(""); // expense amount
  const [category, setCategory] = useState(""); // expense category

  const onEdit = (item, index) => {
    item.index = index;
    setEditExpense(item);
    setAmount(item.amount);
    setCategory(item.category);
  };
  const onSave = () => {
    const updatedExpense = {
      ...editExpense,
      amount,
      category,
    };

    setExpenses((currExpenses) => {
      currExpenses[editExpense.index] = updatedExpense;
      return currExpenses;
    });
    setAmount(""); //reset amount after save
    setCategory(""); //reset category after save
    setEditExpense(null); //reset edit after save
  };
  return (
    <div className={styles.expense_tracker_container}>
      <ExpenseTrackerInputs
        editExpense={editExpense}
        setExpenses={setExpenses}
        setAmount={setAmount}
        amount={amount}
        setCategory={setCategory}
        category={category}
        onSave={onSave}
      />
      <ExpenseTrackerList
        onEdit={onEdit}
        expenses={expenses}
        setExpenses={setExpenses}
        editExpense={editExpense}
      />
    </div>
  );
};

export default ExpenseTracker;
