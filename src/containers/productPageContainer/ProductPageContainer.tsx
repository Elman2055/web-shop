import { useEffect } from "react";
import ProductPage from "../../components/productPage/ProductPage";
import { useGetProductQuery } from "../../store/webshopApi";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const ProductPageContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductQuery(Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Loader isOpen={isLoading} />
      <ProductPage product={data?.product} />
    </>
  );
};

export default ProductPageContainer;
