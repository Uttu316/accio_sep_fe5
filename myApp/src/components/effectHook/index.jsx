import { useState } from "react";
import ProductReviews from "../ProductReviews";

const EffectHooK = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <h1>Products</h1>

      {!state && <button onClick={() => setState(true)}>Show Review</button>}
      {state && <button onClick={() => setState(false)}>Hide Review</button>}

      {state && <ProductReviews />}
    </div>
  );
};
export default EffectHooK;
