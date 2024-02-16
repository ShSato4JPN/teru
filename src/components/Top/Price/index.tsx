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
        <h1 className={styles["price__header"]}>PRICE</h1>
        <div className={styles["price__body"]}>
          <h1>test</h1>
        </div>
      </div>
      <div className={styles["price__map"]}></div>
    </div>
  );
}

export default Price;