"use client";
import { Train_One } from "next/font/google";
import BackgroundSwiper from "@/components/BackgroundSwiper";
import styles from "./styles.module.scss";
import photo01 from "/public/photo-01.jpg";
import photo02 from "/public/photo-02.jpg";
import photo03 from "/public/photo-03.jpg";
import photo04 from "/public/photo-04.jpg";
import photo05 from "/public/photo-05.jpg";

const trainOne = Train_One({
  weight: "400",
  preload: false,
});

function Title(): JSX.Element {
  const imagePaths = [photo01, photo02, photo03, photo04, photo05];

  return (
    <div className={`${styles["title"]} ${trainOne.className}`}>
      <div className={styles["top-gradation"]}></div>
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
      <div className={styles["bottom-gradation"]}></div>
    </div>
  );
}

export default Title;
