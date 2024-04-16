"use client";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import HamburgerMenu from "../HamburgerMenu";
import styles from "./styles.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__wrapper"]}>
        <div className={styles["header__sns-icons"]}>
          <a href="" target="blank">
            <BsTwitterX className={styles["header__sns-icons__x"]} />
          </a>
          <a href="" target="blank">
            <BsInstagram className={styles["header__sns-icons__instagram"]} />
          </a>
        </div>
        <div className={styles["header__hamburger"]}>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
