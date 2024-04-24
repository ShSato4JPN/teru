"use client";

import AutoSwiper from "@/components/AutoSwiper";

import styles from "./style.module.scss";

export default function Opening() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gradationTop} />
      <AutoSwiper />
      <div className={styles.name}>
        <p className={styles.kanji}>花魁</p>
        <p className={styles.alphabet}>OIRAN</p>
      </div>
      <div className={styles.gradationBottom} />
    </div>
  );
}
