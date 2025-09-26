import { useState } from "react";
import { GiTakeMyMoney as Icon } from "react-icons/gi";
import { MdDelete as DltIcon, MdModeEdit as EditIcon } from "react-icons/md";
import "./expenseTracker.css";

const ExpenseTracker = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [expenses, setExpenses] = useState([]);

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

  const onDelete = (id) => {
    setExpenses((currExpenses) => currExpenses.filter((i) => i.id !== id));
  };
  const hasExpenses = expenses.length !== 0;
  return (
    <div className="expense_tracker_container">
      <div className="expense_tracker_input_box">
        <input
          type="number"
          onChange={onAmountChange}
          placeholder="Enter Amount"
          className="expense_tracker_input"
          min={1}
          value={amount}
        />
        <select
          value={category}
          onChange={onCategoryChange}
          className="expense_tracker_categories"
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
        <button onClick={onAdd}>
          Add Expense <Icon />
        </button>
      </div>
      <div className="expense_tracker_list">
        {!hasExpenses && (
          <h3 className="expense_tracker_empty">No Expense yet</h3>
        )}
        {hasExpenses &&
          expenses.map((item) => (
            <div className="expense_tracker_list_item">
              <div className="expense_tracker_item_details">
                <p className="expense_tracker_item_amount">{item.amount}</p>
                <p className="expense_tracker_item_category">{item.category}</p>
              </div>
              <div className="expense_tracker_item_right">
                <p className="expense_tracker_item_time">
                  {new Date(item.time).toLocaleDateString()}{" "}
                  {new Date(item.time).toLocaleTimeString()}
                </p>
                <div className="expense_tracker_item_actions">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="expense_tracker_item_btn dlt_btn"
                  >
                    <DltIcon />
                  </button>
                  <button className="expense_tracker_item_btn edit_btn">
                    <EditIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExpenseTracker;
