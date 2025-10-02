import { useNavigate, useParams } from "react-router";
import ProductHeader from "../../components/ProductHeader";
import { useEffect } from "react";
import { api } from "../../services";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const data = await api({
        endpoint: `/products/${productId}`,
      });
      console.log(data);
    } catch (e) {}
  };

  useEffect(() => {
    if (productId) {
      getProduct();
    }
  }, [productId]);

  return (
    <div>
      <ProductHeader />
      <h1>Product Details</h1>
    </div>
  );
};
export default ProductPage;
