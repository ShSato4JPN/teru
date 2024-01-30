"use client";
import styles from "./styles.module.scss";
import HamburgerMenu from "@/components/HamburgerMenu";

function Header(): JSX.Element {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__wrapper"]}>
        <div className={styles["header__title"]}>
          {/* <a href="/">花魁 oiran</a> */}
        </div>
        <div className={styles["header__hamburger"]}>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
