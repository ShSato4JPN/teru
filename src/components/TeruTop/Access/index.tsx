"use client";

import { useMemo } from "react";

import GoogleMap from "@/components/GoogleMap";
import { infomationData } from "@/config";

import styles from "./style.module.scss";

export default function Access() {
  const items = useMemo<JSX.Element[]>(
    () =>
      infomationData.map((v) => (
        <dl className={styles.row} key={v.key}>
          <dt className={styles.key}>{v.column}</dt>
          <dd className={styles.value}>{v.data}</dd>
        </dl>
      )),
    [],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.access}>
        <div className={styles.information}>{items}</div>
        <GoogleMap />
      </div>
    </div>
  );
}
