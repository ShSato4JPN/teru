"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Price(): JSX.Element {
  const animation = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={animation}
      viewport={{ once: true, margin: "-100px" }}
      initial="offscreen"
      whileInView="onscreen"
      className={styles["price"]}
    >
      <div className={styles["price__wrapper"]}>
        <h1 id="price" className={styles["price__header"]}>
          PRICE
        </h1>
        <div className={styles["price__body"]}>test</div>
      </div>
    </motion.div>
  );
}

export default Price;
