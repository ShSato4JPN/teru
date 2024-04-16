"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import config from "@/config";
import GoogleMap from "../../GoogleMap";
import styles from "./styles.module.scss";

function Information(): JSX.Element {
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

  const items = useMemo(
    () =>
      Object.entries(config.information).map(([key, value]) => (
        <div className={styles["information__grid"]} key={key}>
          <div className={styles["information__grid__title"]}>
            {value.column}
          </div>
          <div className={styles["information__grid__value"]}>{value.data}</div>
        </div>
      )),
    [],
  );

  return (
    <motion.div
      variants={animation}
      viewport={{ once: true, margin: "-100px" }}
      initial="offscreen"
      whileInView="onscreen"
      className={styles["information"]}
    >
      <div className={styles["information__wrapper"]}>
        <h1 id="information" className={styles["information__header"]}>
          INFORMATION
        </h1>
        <div className={styles["information__body"]}>
          <div className={styles["information__access"]}>{items}</div>
          <div className={styles["information__map"]}>
            <GoogleMap />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Information;
