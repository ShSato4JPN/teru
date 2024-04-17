"use client";

import styles from "./styles.module.scss";

export default function GooleMap(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.googleMap}>
        <div className={styles.map}></div>
      </div>
    </div>
  );
}
