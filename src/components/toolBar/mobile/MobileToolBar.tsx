import sideBar from "../../../../public/sideBarImage.png";
import favourites from "../../../../public/favourites.png";
import cart from "../../../../public/cart.png";
import closeSide from "../../../../public/closeSide.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./MobileToolBar.module.css";

const MobileToolBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className={styles.wrapper}>
        <nav className={styles.container}>
          <div className={styles.sideContainer}>
            <img
              src={sideBar}
              alt="sideBar"
              className={styles.sideBar}
              onClick={() => setIsOpen(true)}
            />
            <div className={styles.toolBarTitle}>
              <NavLink to={"/"}>
                <p>WEB</p>
                <span>Shop</span>
              </NavLink>
            </div>
          </div>
          <div className={styles.authBlock}>
            <NavLink to={"/"}>
              <img src={favourites} alt="favourites" />
            </NavLink>
            <NavLink to={"/"} className={styles.cart}>
              <img src={cart} alt="cart" />
            </NavLink>
            <NavLink to={"/"}>
              <button className={styles.registerBtn}>Регистрация</button>
            </NavLink>
          </div>
        </nav>
      </header>
      <div
        className={`${styles.sidebarWrap} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div className={styles.closeBlock}>
          <img
            src={closeSide}
            alt="closeSide"
            className={styles.closeSide}
            onClick={() => setIsOpen(false)}
          />
          <div className={styles.sideBarTitle}>
            <p>WEB</p>
            <span>Shop</span>
          </div>
        </div>
        <ul className={styles.navList}>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Главная
            </NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink
              to={"/contacts"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Контакты
            </NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to={"/"}>О нас</NavLink>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to={"/"}>Каталог</NavLink>
          </li>
        </ul>
        <div className={styles.registerSideBlock}>
          <div className={styles.registerBtns}>
            <button className={styles.login}>Вход</button>
            <span> / /</span>
            <button className={`${styles.login} ${styles.signUp}`}>
              Регистрация
            </button>
          </div>
          <p>© Copyright 2024 WEBshop</p>
          <p>Политика конфидециальности</p>
          <p>Публичная оферта</p>
        </div>
      </div>
    </>
  );
};

export default MobileToolBar;
