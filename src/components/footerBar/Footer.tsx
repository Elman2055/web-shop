import RunningLine from "../runningLine/RunningLine";
import instagram from "../../../public/instagram.png";
import vk from "../../../public/vk.png";
import facebook from "../../../public/facebook.png";
import whatsapp from "../../../public/whatsapp.png";
import { NavLink } from "react-router-dom";
import useDesktop from "../hooks/useDesktop";
import styles from "./Footer.module.css";

const Footer = () => {
  const isDesktop = useDesktop();

  return (
    <div>
      {isDesktop ? <RunningLine /> : <></>}
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <div>
            <p className={styles.helpText}>
              СВЯЖИТЕСЬ С <br /> НАМИ ДЛЯ <br /> КОНСУЛЬТАЦИИ <br /> И ПОДДЕРЖКИ{" "}
            </p>
          </div>
          <div className={styles.formInputs}>
            <input type="text" className={styles.inputs} placeholder="Ф.И.О" />
            <input
              type="email"
              className={styles.inputs}
              placeholder="E-mail."
            />
            <input
              type="tel"
              className={styles.inputs}
              placeholder="Телефон."
            />
            <input
              type="text"
              className={`${styles.inputs} ${styles.messageInp}`}
              placeholder="Сообщение."
            />
            <button className={styles.sendBtn}>ОТПРАВИТЬ</button>
          </div>
          {!isDesktop && (
            <img
              src={whatsapp}
              alt="whatsapp"
              className={styles.mobileWhatsapp}
            />
          )}
        </div>
      </div>
      <div className={styles.footerDownWrapper}>
        <div className={styles.footerDownContainer}>
          <div className={styles.infoBlock}>
            <div className={styles.firstColumn}>
              <div className={styles.firstDownBlock}>
                <h2 className={styles.category}>Категории</h2>
                <NavLink to={"/"}>Информационная</NavLink>
                <span>-</span>
                <NavLink to={"/"}>Образовательные</NavLink>
                <span>-</span>
                <NavLink to={"/"}>Социальные сети</NavLink>
                <span>-</span>
                <NavLink to={"/"}>Форумы и сообщества</NavLink>
              </div>
              <div
                className={`${styles.firstDownBlock} ${styles.secondDownBlock}`}
              >
                <NavLink to={"/"}>Корпаротивные</NavLink>
                <span>-</span>
                <NavLink to={"/"}>Интернет магазины</NavLink>
                <span>-</span>
                <NavLink to={"/"}>Развлекательные</NavLink>
                <span>-</span>
                <NavLink to={"/"}>Форумы и сообщества</NavLink>
              </div>
            </div>
            <div className={styles.secondColumn}>
              <div className={styles.thirdDownBlock}>
                <h2>Контакты</h2>
                <p className={styles.address}>
                  Юридический адрес <br /> ул. 1905 года, д. 7, стр. 1, <br />
                  пом. I Б, эт. 3, комн. 3, <br /> Москва, 123022, Россия
                </p>
                <div className={styles.downImages}>
                  {isDesktop ? (
                    <>
                      <img src={instagram} alt="instagram" />
                      <img
                        src={facebook}
                        alt="facebook"
                        className={styles.facebook}
                      />
                      <img src={vk} alt="vk" />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className={styles.fourDownBlock}>
                <div className={styles.downTitleText}>
                  <p>+7 707 123-456-78</p>
                  <p>+7 707 123-456-77</p>
                  <p>+7 707 123-445-56</p>
                  <p>Web_shop@mail.ru</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.politicInfoBlock}>
            <div className={styles.politicText}>
              <p>© Copyright 2024 WEBshop</p>
              <p className={styles.centeredPoliticText}>
                Политика конфидециальности
              </p>
              <p>Публичная оферта</p>
            </div>
            {isDesktop ? (
              <img
                src={whatsapp}
                alt="whatsapp"
                className={styles.whatsappImage}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
