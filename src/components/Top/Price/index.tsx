"use client";
import React from "react";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Price(): JSX.Element {
  return (
    <div className={styles["price"]}>
      <div className={styles["price__wrapper"]}>
        <div className={styles["price__body"]}></div>
      </div>
    </div>
  );
}

export default Price;
