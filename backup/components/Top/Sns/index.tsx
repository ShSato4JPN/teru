"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import styles from "./styles.module.scss";

function sns(): JSX.Element {
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
      viewport={{ once: true, margin: "-250px" }}
      initial="offscreen"
      whileInView="onscreen"
      className={styles["sns"]}
    >
      <div className={styles["sns__wrapper"]}>
        <h1 id="sns" className={styles["sns__header"]}>
          SNS
        </h1>
        <div className={styles["sns__body"]}>
          <BsTwitterX className={styles["x-icon"]} />
          <BsInstagram className={styles["instagram-icon"]} />
        </div>
      </div>
    </motion.div>
  );
}

export default sns;
