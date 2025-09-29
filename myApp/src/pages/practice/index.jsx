import Counter from "../../components/Counter";
import EffectHooK from "../../components/effectHook";
import ExpenseTracker from "../../components/ExenseTracker";
import "./practice.css";
const PracticePage = () => {
  return (
    <div className="practice_page">
      <Counter />
      <ExpenseTracker />
      <EffectHooK />
    </div>
  );
};
export default PracticePage;
