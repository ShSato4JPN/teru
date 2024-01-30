"use client";
import { useMemo } from "react";
import GoogleMap from "@/components/GoogleMap";
import styles from "./styles.module.scss";

function Access(): JSX.Element {
  const data = {
    address: {
      column: "住所",
      data: "〒000-0000 東京都渋谷区渋谷1-1-1",
    },
    tel: { column: "電話番号", data: "000-0000-0000" },
    open: { column: "営業時間", data: "10:00 ~ 23:00" },
    close: { column: "定休日", data: "月水金" },
  };

  const items = useMemo(
    () =>
      Object.entries(data).map(([key, value]) => (
        <li className={styles["access__item"]} key={key}>
          <div className={styles["access__item__wrapper"]}>
            <div className={styles["access__item__title"]}>
              <span>{value.column}</span>
            </div>
            <div className={styles["access__item__value"]}>
              <span>{value.data}</span>
            </div>
          </div>
        </li>
      )),
    [],
  );

  return (
    <div className={styles["access"]}>
      <div className={styles["access__wrapper"]}>
        <h1 className={styles["access__header"]}>Access</h1>
        <div className={styles["access__body"]}>
          <ul>{items}</ul>
        </div>
      </div>
      <div className={styles["access__map"]}>
        <GoogleMap />
      </div>
    </div>
  );
}

export default Access;
