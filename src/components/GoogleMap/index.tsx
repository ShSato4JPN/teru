"use client";
import styles from "./styles.module.scss";

function GooleMap(): JSX.Element {
  return (
    <div className={styles["map"]}>
      <div className={styles["map__wrapper"]}>
        <div className={styles["map__body"]}></div>
      </div>
    </div>
  );
}

export default GooleMap;
