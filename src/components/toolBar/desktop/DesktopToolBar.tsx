import { NavLink } from "react-router-dom";
import favourites from "../../../../public/favourites.png";
import cart from "../../../../public/cart.png";
import styles from "./DesktopToolBar.module.css";

const DesktopToolBar = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.container}>
        <div className={styles.textNavContainer}>
          <div className={styles.heading}>
            <NavLink to={"/"}>
              <p className={styles.title}>WEB</p>
              <span className={styles.miniTitle}>Shop</span>
            </NavLink>
          </div>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <p>Главная</p>
          </NavLink>
          <NavLink
            to={"/contacts"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <p>Контакты</p>
          </NavLink>
          <NavLink to={"/"}>
            <p>О нас</p>
          </NavLink>
          <NavLink to={"/"}>
            <p>Каталог</p>
          </NavLink>
        </div>
        <div className={styles.blockNavContainer}>
          <div className={styles.navImages}>
            <NavLink to={"/"}>
              <img src={favourites} alt="favourites" />
            </NavLink>
            <NavLink to={"/"}>
              <img src={cart} alt="cart" className={styles.cartImage} />
            </NavLink>
          </div>
          <div className={styles.navBtns}>
            <NavLink to={"/"}>
              <button className={styles.login}>Вход</button>
            </NavLink>
            <NavLink to={"/"}>
              <button className={`${styles.login} ${styles.signUp}`}>
                Регистрация
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopToolBar;
