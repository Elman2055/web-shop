import Slider from "../slider/Slider";
import { TMainApi } from "../../types/data.types";
import { infoBlock } from "./infoMain.data";
import { faqBlock } from "./infoMain.data";
import pc from "../../../public/pc.png";
import useDesktop from "../hooks/useDesktop";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";

const MainPage = ({
  firstRowMainBg,
  secondRowMainBg,
  firstCarousel,
  secondCarousel,
}: TMainApi) => {
  const isDesktop = useDesktop();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        {isDesktop ? (
          <>
            {" "}
            <div className={styles.GradientTextBlock}>
              <div className={styles.purpleGradientBlock}>{".....  {"}</div>
              <div className={styles.titleFirstBlock}>
                <p>
                  НАШИ САЙТЫ{" "}
                  <span>
                    КРЕАТИВНЫЙ <br /> ИНСТРУМЕНТ
                  </span>{" "}
                  ДЛЯ <br /> ПРИВЛЕЧЕНИЯ КЛИЕНТОВ
                </p>
                <h3>{"{"}</h3>
              </div>
            </div>
            <div className={styles.productBlock}>
              {firstRowMainBg.map((el) => (
                <img
                  key={el.product_id}
                  src={`https://webshop2.kz/api/products/previewImage/${el.image_preview}`}
                  alt="app"
                  className={styles.imageRadius}
                  onClick={() =>
                    navigate({ pathname: `product/${el.product_id}` })
                  }
                />
              ))}
              <div className={styles.freeWebBlock}>
                <div className={styles.freeWebText}>
                  <p>При покупке от 3 сайтов </p>
                  <h6>
                    Бесплатный <br /> корпоротивный <br /> сайт
                  </h6>
                </div>
              </div>
              {secondRowMainBg.map((el) => (
                <img
                  key={el.product_id}
                  src={`https://webshop2.kz/api/products/previewImage/${el.image_preview}`}
                  alt="app"
                  className={styles.imageRadius}
                  onClick={() =>
                    navigate({ pathname: `product/${el.product_id}` })
                  }
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className={styles.mobileWrapper}>
              <div className={styles.freeInfoBlock}>
                <div className={styles.freeInfoText}>
                  <span style={{ paddingBottom: "10px" }}>
                    При покупке от 3 сайтов
                  </span>
                  <p>
                    Бесплатный <br /> корпоротивный сайт
                  </p>
                  <img src={pc} alt="pc" />
                  <div className={styles.giftText}>
                    <span>Корпаротивный сайт</span>
                    <p className={styles.gift}>В ПОДАРОК</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
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
        <div className={styles.yorIdeasGradientWrapper}>
          <div className={styles.yorIdeasGradientBlock}>
            <p className={styles.GradientBlockAnswer}>
              ПОЧЕМУ СТОИТ ВЫБИРАТЬ НАС///
            </p>
            <div className={styles.yorIdeasBlock}>
              <p>
                <span className={styles.answerMark}>?</span>МЫ{" "}
                <span>ВОПЛОТИМ</span> <br /> ВАШИ ИДЕИ <span>ЧЕРЕЗ</span> <br />
                <span>ВИЗУАЛЬНЫЕ</span> <br /> МЕТАФОРЫ
              </p>
            </div>
          </div>
          <p className={styles.downTitleBlock}>
            Мы специализируемся на создании и продаже уникальных сайтов, которые
            помогут вашему бизнесу выделиться среди конкурентов. Наши
            специалисты разработают для вас сайт, который будет не только
            привлекать внимание, но и эффективно работать на ваш успех.
            Доверьтесь нашему опыту и профессионализму, и получите мощный
            инструмент, который будет способствовать росту и развитию вашего
            бизнеса, привлекая новых клиентов и повышая вашу онлайн-репутацию.
          </p>
        </div>
      </div>
      <Slider carouseItems={firstCarousel} />
      <div className={styles.secondCarousel}>
        <Slider carouseItems={secondCarousel} />
      </div>
      <div className={styles.container}>
        <div className={styles.howWorkBlock}></div>
        <p className={styles.howWorkText}>
          КАК <span>ЭТО {isDesktop ? <br /> : <></>} РАБОТАЕТ?</span>
        </p>
        <p className={styles.howWorkDownText}>
          <span>ПРОЦЕСС</span> РАЗРАБОТКИ ДЕЛИТСЯ НА РЯД ЭТАПОВ С ЦЕЛЬЮ
          ДОСТИЖЕНИЯ МАКСИМАЛЬНОЙ ЭФФЕКТИВНОСТИ.
        </p>
        <div className={styles.gridContainer}>
          {infoBlock.map((el) => (
            <div key={el.id} className={styles.infoBlock}>
              <div>
                <ul>
                  <div className={styles.numberBlock}>
                    <p>{el.number}</p>
                  </div>
                  <p className={styles.title}>{el.title}</p>
                  {el.items.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className={styles.faq}>FAQ/// </p>
          {faqBlock.map((el) => (
            <div key={el.id} className={styles.faqBlock}>
              <div>
                <p className={styles.faqTitle}>{el.title}</p>
                <img src={el.image} alt="dash" className={styles.dash} />
              </div>
              <div className={styles.line}></div>
              <p className={styles.downTitleFaq}>{el.downTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
