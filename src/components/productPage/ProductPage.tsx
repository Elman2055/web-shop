import stars from "../../../public/stars.png";
import feedback from "../../../public/feedback.png";
import { usersFeedbacks } from "./infoProduct.data";
import useDesktop from "../hooks/useDesktop";
import styles from "./ProductPage.module.css";
import { TProducts } from "../../types/data.types";

const ProductPage = ({ product }: { product: TProducts[] }) => {
  const isDesktop = useDesktop();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.categoryBlock}>
          {[
            "ИНФОРМАЦИОННЫЕ",
            "ЭЛЕКТРОННАЯ КОММЕРЦИЯ",
            "СОЦИАЛЬНЫЕ СЕТИ",
            "РАЗВЛЕКАТЕЛЬНЫЕ",
            "ОБРАЗОВАТЕЛЬНЫЕ",
          ].map((el, index) => (
            <p key={index} className={styles.categoryText}>
              {el}
            </p>
          ))}
        </div>
        {isDesktop ? (
          <>
            {product &&
              product.map((el) => (
                <div key={el.product_id} className={styles.productBlock}>
                  <img
                    src={`https://webshop2.kz/api/products/previewImage/${el.image_preview}`}
                    alt="product"
                    className={styles.productImage}
                  />
                  <div className={styles.productTextBlock}>
                    <p className={styles.productTitle}>{el.title}</p>
                    <p className={styles.price}>{el.price}ТГ </p>
                    <img src={stars} alt="stars" />
                    <div className={styles.productBtnContainer}>
                      <button className={styles.productBtns}>КУПИТЬ</button>
                      <button
                        className={`${styles.productBtns} ${styles.addCartBtn}`}
                      >
                        В КОРЗИНУ
                      </button>
                    </div>
                    <div className={styles.productLine}></div>

                    <div className={styles.gradientBackground}>
                      <p className={styles.titleDescription}>Описание</p>
                      <p className={styles.productDescription}>
                        {el.description}
                      </p>

                      <p className={styles.titleDescription}>
                        Как это работает?
                      </p>
                      <p className={styles.productDescription}>
                        Lorem ipsum dolor sit amet consectetur. Eget nibh dolor
                        malesuada ante eu sed convallis morbi eget. Facilisis
                        laoreet amet non placerat vitae interdum felis leo.
                        Elementum neque mi neque leo tortor enim dui. Semper
                        luctus duis turpis consequat elit eu sit.{" "}
                      </p>
                      <p className={styles.productDescription}>
                        Platea morbi enim eu fusce vitae urna ultrices vitae.
                        Pellentesque varius faucibus quis morbi scelerisque
                        nulla. Pretium neque blandit bibendum aliquam ipsum
                        vitae felis amet enim.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            <div className={styles.feedbackBlock}>
              <p className={styles.feedback}>5 ОТЗЫВОВ НА ТОВАРЕ</p>
              <p className={`${styles.feedback} ${styles.createFeedback}`}>
                ОСТАВИТЬ ОТЗЫВ ...&#9998;
              </p>
            </div>
          </>
        ) : (
          <>
            {product &&
              product.map((el) => (
                <div key={el.product_id} className={styles.productBlock}>
                  <div className={styles.productTextBlock}>
                    <div>
                      <p className={styles.productTitle}>{el.title}</p>
                      <div className={styles.mobilePrice}>
                        <p className={styles.price}>{el.price}ТГ</p>
                        <img
                          src={stars}
                          alt="stars"
                          className={styles.starsMobile}
                        />
                      </div>
                    </div>
                    <img
                      src={`https://webshop2.kz/api/products/previewImage/${el.image_preview}`}
                      alt="product"
                      className={styles.productImage}
                    />
                    <div className={styles.productBtnContainer}>
                      <button className={styles.productBtns}>КУПИТЬ</button>
                      <button
                        className={`${styles.productBtns} ${styles.addCartBtn}`}
                      >
                        В КОРЗИНУ
                      </button>
                    </div>

                    <div className={styles.gradientBackground}>
                      <p className={styles.titleDescription}>Описание</p>
                      <p className={styles.productDescription}>
                        {el.description}
                      </p>

                      <p className={styles.titleDescription}>
                        Как это работает?
                      </p>
                      <p className={styles.productDescription}>
                        Lorem ipsum dolor sit amet consectetur. Eget nibh dolor
                        malesuada ante eu sed convallis morbi eget. Facilisis
                        laoreet amet non placerat vitae interdum felis leo.
                        Elementum neque mi neque leo tortor enim dui. Semper
                        luctus duis turpis consequat elit eu sit.{" "}
                      </p>
                      <p className={styles.productDescription}>
                        Platea morbi enim eu fusce vitae urna ultrices vitae.
                        Pellentesque varius faucibus quis morbi scelerisque
                        nulla. Pretium neque blandit bibendum aliquam ipsum
                        vitae felis amet enim.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            <div className={styles.mobileFeedbackBlock}>
              <p>6 отзывов</p>
              <p className={styles.addFeedbackMobile}>Оставить отзыв</p>
            </div>
          </>
        )}
      </div>
      <div className={styles.feedbackContainer}>
        {usersFeedbacks.map((el) => (
          <div key={el.id} className={styles.peopleFeedback}>
            <div className={styles.feedbackName}>
              <p className={styles.feedbackNameUsers}>от {el.name}</p>
              <div className={styles.downTitleFeedback}>
                <p className={styles.feedbackDate}>{el.date}</p>
                <img src={feedback} alt="feedback" />
              </div>
            </div>
            <div className={styles.feedbackDescription}>{el.description}</div>
          </div>
        ))}
      </div>
      <div className={styles.addFeedbackContainer}>
        <button className={styles.addFeedback}>ОСТАВИТЬ ОТЗЫВ</button>
      </div>
    </>
  );
};

export default ProductPage;
