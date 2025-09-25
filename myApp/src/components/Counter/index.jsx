import { useState } from "react";
import {
  MdAdd as AddIcon,
  MdHorizontalRule as MinusIcon,
} from "react-icons/md";
import "./counter.css";

const Counter = () => {
  // let x =0
  const [count, setCount] = useState(0);

  const onAdd = (e) => {
    // count += 1;
    if (count < 10) {
      setCount(count + 1); //async
      console.log("Adds", count);
    }

    // document.querySelector(".counter_count").innerHTML = count;
  };
  const onMinus = (e) => {
    // count -= 1;
    setCount((curr) => (curr > 0 ? curr - 1 : 0));
    console.log("Minus", count);
    // document.querySelector(".counter_count").innerHTML = count;
  };
  return (
    <div className="counter_container">
      <h2 className="counter_heading">Counter</h2>
      <h3 className="counter_count">{count}</h3>
      <div className="counter_actions">
        <button disabled={count >= 10} onClick={onAdd}>
          Add <AddIcon />
        </button>
        <button disabled={count < 0} onClick={onMinus}>
          Minus <MinusIcon />
        </button>
      </div>
      {count >= 10 && <b className="counter_message">Limit Reached</b>}
      {count <= 0 && <b className="counter_message">Not Allowed</b>}
    </div>
  );
};
export default Counter;
//create a counter component
//initialise a state count
// show count value with 2 buttons in UI
// if the value of count is more than 10: show a bold tag with "Limit Reached"
// if the value of count is less than 0: show a bold tag with "Not Allowed"
