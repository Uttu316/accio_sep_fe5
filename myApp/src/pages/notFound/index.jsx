import { Link } from "react-router";
import ProductHeader from "../../components/ProductHeader";

const NotFoundPage = () => {
  return (
    <div>
      <ProductHeader />
      <h1>Page Not Found</h1>
      <Link replace={true} to={"/"}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
