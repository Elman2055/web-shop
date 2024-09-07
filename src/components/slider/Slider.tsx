import { TProducts } from "../../types/data.types";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Slider.module.css";

const Slider = ({ carouseItems }: { carouseItems: TProducts[] }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      const handleScroll = (event: WheelEvent) => {
        event.preventDefault();
        sliderElement.scrollLeft += event.deltaY;
      };

      sliderElement.addEventListener("wheel", handleScroll, { passive: false });

      return () => {
        sliderElement.removeEventListener("wheel", handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.choiceApp} ref={sliderRef}>
      {carouseItems.map((el) => (
        <div
          key={el.product_id}
          className={styles.definiteApp}
          onClick={() => navigate({ pathname: `product/${el.product_id}` })}
        >
          <img
            src={`https://webshop2.kz/api/products/previewImage/${el.image_preview}`}
            alt="App"
            className={styles.appBackground}
          />
          <div className={styles.apptextBlock}>
            <h4>{el.title}</h4>
            <p>{el.price} тг</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
