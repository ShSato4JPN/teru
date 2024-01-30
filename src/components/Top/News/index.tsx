"use client";
import { useMemo } from "react";
import { CgChevronRight } from "react-icons/cg";
import Link from "next/link";
import styles from "./styles.module.scss";

function News(): JSX.Element {
  const data = [
    {
      date: "2024.01.01",
      message: "お店をオープンしました！！",
    },
    {
      date: "2024.01.05",
      message: "⚪︎⚪︎さんが来店しました！！",
    },
    {
      date: "2024.01.02",
      message: "新しいお酒を仕入れました！！",
    },
    {
      date: "2023.12.01",
      message:
        "⚪︎⚪︎さんの誕生日パーティーを行いました！\nおめでとうございます🎉🎉",
    },
    {
      date: "2024.06.01",
      message: "ホームページを公開しました！",
    },
    {
      date: "2022.06.xx",
      message: "heloo",
    },
  ];

  const news = useMemo(
    () =>
      data
        .sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          } else {
            return 1;
          }
        })
        .map((news, index) => (
          <li className={styles["news__item"]} key={`${news.date}-${index}`}>
            <div className={styles["news__item__date"]}>{news.date}</div>
            <div className={styles["news__item__message"]}>{news.message}</div>
          </li>
        ))
        .slice(0, 5),
    [data],
  );

  return (
    <div className={styles["news"]}>
      <div className={styles["news__wrapper"]}>
        <h1 className={styles["news__header"]}>news</h1>
        <div className={styles["news__body"]}>
          <ul>{news}</ul>
          <div className={styles["news__past"]}>
            <Link href="/news">
              <span>ニュース一覧</span>
            </Link>
            <CgChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
