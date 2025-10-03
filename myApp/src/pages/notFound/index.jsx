import { Link } from "react-router";
import ProductHeader from "../../components/ProductHeader";
import PageWrapper from "../../components/PageWrapper";

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <h1>Page Not Found</h1>
      <Link replace={true} to={"/"}>
        Go to Home
      </Link>
    </PageWrapper>
  );
};

export default NotFoundPage;
