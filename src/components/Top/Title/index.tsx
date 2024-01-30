"use client";
import { Train_One } from "next/font/google";
import BackgroundSwiper from "@/components/BackgroundSwiper";
import styles from "./styles.module.scss";

const trainOne = Train_One({
  weight: "400",
  preload: false,
});

function Title(): JSX.Element {
  const imagePaths = [
    "/photo-01.jpg",
    "/photo-02.jpg",
    "/photo-03.jpg",
    "/photo-04.jpg",
    "/photo-05.jpg",
  ];

  return (
    <div className={`${styles["title"]} ${trainOne.className}`}>
      <div className={styles["swiper"]}>
        <BackgroundSwiper imagePaths={imagePaths} />
      </div>
      <div className={styles["title__wrapper"]}>
        <ruby>
          花魁 <rp>(</rp>
          <rt>OIRAN</rt>
          <rp>)</rp>
        </ruby>
      </div>
    </div>
  );
}

export default Title;
