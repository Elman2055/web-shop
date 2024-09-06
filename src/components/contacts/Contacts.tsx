import useDesktop from "../hooks/useDesktop";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const isDesktop = useDesktop();

  return (
    <div className={styles.container}>
      {!isDesktop && (
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
      )}
      <div className={styles.gradientContainer}>
        <div className={styles.gradientBlock}>
          <p className={styles.contactsTitle}>..... {"{"}</p>
        </div>
        <div className={styles.contacts}>
          <p>
            НАШИ <br /> <span>КОНТАКТЫ</span>
          </p>
        </div>
      </div>
      {isDesktop ? (
        <div className={styles.contactsContainer}>
          <div className={styles.firstRow}>
            <div className={`${styles.firstRowColumn} ${styles.firstColumn}`}>
              <p>
                Юридический адрес <br /> ул. 1905 года, д. 7, стр. 1, <br />
                пом. I Б, эт. 3, комн. 3, <br />
                Москва, 123022, Россия
              </p>
            </div>
            <div className={`${styles.firstRowColumn} ${styles.secondColumn}`}>
              <p>
                Телефон: 87071234567 <br />
                Электронная почта: <br />
                websh@gmail.com <br />
                Телеграм-бот: web_shop
              </p>
            </div>
            <div className={`${styles.firstRowColumn} ${styles.thirdColumn}`}>
              <div className={styles.thirdColumnWrapper}></div>
              <div className={styles.thirdColumnWrapperPurple}></div>
            </div>
          </div>
          <div className={styles.secondRow}>
            <div className={`${styles.downColumn} ${styles.fourColumn}`}>
              <p>
                Телефоны <br /> бесплатные <br /> По Алмате:8800 200-40-33{" "}
                <br /> В Москве:+7495 105-91-24
              </p>
              <div className={styles.fourColumnWrapper}></div>
            </div>
            <div className={`${styles.downColumn} ${styles.fiveColumn}`}></div>
            <div className={`${styles.downColumn} ${styles.sixColumn}`}></div>
          </div>
        </div>
      ) : (
        <div className={styles.contactsContainerMobile}>
          <div className={`${styles.mobileColumn} ${styles.firstColumnMobile}`}>
            <p>
              Телефоны <br /> бесплатные <br /> По Алмате:8800 200-40-33 <br />{" "}
              В Москве:+7495 105-91-24
            </p>
          </div>
          <div
            className={`${styles.mobileColumn} ${styles.secondColumnMobile}`}
          >
            <p>
              Юридический адрес <br /> ул. 1905 года, д. 7, стр. 1, <br />
              пом. I Б, эт. 3, комн. 3, <br />
              Москва, 123022, Россия
            </p>
          </div>
          <div className={`${styles.mobileColumn} ${styles.thirdColumnMobile}`}>
            <p>
              Телефон: 87071234567 <br />
              Электронная почта: <br />
              websh@gmail.com <br />
              Телеграм-бот: web_shop
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
