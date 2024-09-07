import { useEffect, useState } from "react";
import MainPage from "../../components/mainPage/MainPage";
import { TProducts } from "../../types/data.types";
import { usePostProductsMutation } from "../../store/webshopApi";
import Loader from "../../components/loader/Loader";

const MainPageContainer = () => {
  const [firstRowMainBg, setFirstRowMainBg] = useState<TProducts[]>([]);
  const [secondRowMainBg, setSecondRowMainBg] = useState<TProducts[]>([]);
  const [firstCarousel, setFirstCarousel] = useState<TProducts[]>([]);
  const [secondCarousel, setSecondCarousel] = useState<TProducts[]>([]);
  const [postProducts, { isLoading }] = usePostProductsMutation();

  const getProducts = async () => {
    const { data } = await postProducts("");
    setFirstRowMainBg(data.items.slice(0, 2));
    setSecondRowMainBg(data.items.slice(2, 3));
    setFirstCarousel(data.items.slice(0, 4));
    setSecondCarousel(data.items.slice(4, 8));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Loader isOpen={isLoading} />
      <MainPage
        firstRowMainBg={firstRowMainBg}
        secondRowMainBg={secondRowMainBg}
        firstCarousel={firstCarousel}
        secondCarousel={secondCarousel}
      />
    </>
  );
};

export default MainPageContainer;
