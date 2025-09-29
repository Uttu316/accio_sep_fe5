import { useEffect, useState } from "react";
import styles from "./productReviews.module.css";

const ProductReviews = () => {
  const [rating, setRating] = useState();
  console.log("ProductReviews called");
  useEffect(() => {
    //after Mount of the component
    console.log("Reviews Appeared on DOM");

    return () => {
      //called after unmount
      //cleanup function
      console.log("Reviews Unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("Rating changed", rating);
  }, [rating]);

  return (
    <div className={styles.productReviewsContainer}>
      <h2>Reviews</h2>

      <h3>User Rating</h3>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value={""}>Choose Rating</option>
        <option value={"1"}>1 star</option>
        <option value={"2"}>2 star</option>
        <option value={"3"}>3 star</option>
        <option value={"4"}>4 star</option>
        <option value={"5"}>5 star</option>
      </select>
    </div>
  );
};
export default ProductReviews;
