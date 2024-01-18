"use client";
import styles from "./styles.module.scss";

function Footer(): JSX.Element {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["copyright"]}>
        <span>Copyright (C) ⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎⚪︎. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
