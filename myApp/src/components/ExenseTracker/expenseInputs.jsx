import { GiTakeMyMoney as Icon } from "react-icons/gi";
import styles from "./expenseTracker.module.css";
import { useState } from "react";
const ExpenseTrackerInputs = ({
  amount,
  category,
  setAmount,
  setCategory,
  setExpenses,
  onSave,
  editExpense,
}) => {
  const onAmountChange = (e) => {
    const currAmount = e.target.value;
    var enteredAmount = currAmount;

    if (currAmount !== "") {
      enteredAmount = Number(currAmount);
      if (isNaN(enteredAmount)) return;
      if (enteredAmount <= 0) return;
    }

    setAmount(enteredAmount);
  };

  const onCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };
  const onAdd = () => {
    if (!amount || !category) return;
    const currExpense = {
      amount,
      category,
      time: Date.now(),
      id: parseInt(Math.random() * 100000),
    };

    setExpenses((currExpenses) => [currExpense, ...currExpenses]);
    setAmount("");
    setCategory("");
  };
  const isEditMode = editExpense !== null;
  return (
    <div className={styles.expense_tracker_input_box}>
      <input
        type="number"
        onChange={onAmountChange}
        placeholder="Enter Amount"
        className={styles.expense_tracker_input}
        min={1}
        value={amount}
      />
      <select
        value={category}
        onChange={onCategoryChange}
        className={styles.expense_tracker_categories}
      >
        <option value={""} disabled>
          Select Category
        </option>
        <option value={"clothes"}>Clothes</option>
        <option value={"food"}>Food</option>
        <option value={"rent"}>Rent</option>
        <option value={"emi"}>EMI</option>
        <option value={"bills"}>Bills</option>
        <option value={"travel"}>Travel</option>
        <option value={"others"}>Others</option>
      </select>
      {!isEditMode && (
        <button onClick={onAdd}>
          Add Expense <Icon />
        </button>
      )}
      {isEditMode && (
        <button onClick={onSave}>
          Save Expense <Icon />
        </button>
      )}
    </div>
  );
};

export default ExpenseTrackerInputs;
