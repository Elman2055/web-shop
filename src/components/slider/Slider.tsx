import { TMain } from "../../types/data.types";
import styles from "./Slider.module.css";
import { useRef, useEffect } from "react";

const Slider = ({ carouseItems }: { carouseItems: TMain[] }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

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
        <div key={el.id} className={styles.definiteApp}>
          <img src={el.img} alt="App" className={styles.appBackground} />
          <div className={styles.apptextBlock}>
            <h4>{el.title}</h4>
            <p>{el.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
