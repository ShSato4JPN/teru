"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import photo01 from "/public/photo-01.jpg";
import photo02 from "/public/photo-02.jpg";

function About(): JSX.Element {
  return (
    <div className={styles["about"]}>
      <div className={styles["about__background"]}>
        <div className={styles["about__background__image__1"]}>
          <Image
            src={photo01}
            width={800}
            height={800}
            style={{ objectFit: "cover" }}
            alt={`about background image no1`}
            className={styles["about__background__images"]}
          />
        </div>
        <div className={styles["about__background__image__2"]}>
          <Image
            src={photo02}
            width={800}
            height={800}
            style={{ objectFit: "cover" }}
            alt={`about background image no2`}
            className={styles["about__background__images"]}
          />
        </div>
      </div>
      <div className={styles["about__wrapper"]}>
        <div className={styles["about__body"]}>
          <span className={styles["emphasis"]}>花魁</span>
          はスポーツ観戦やダーツを楽しみながら、くつろぎのひとときをお過ごしいただける場所です。和をテーマにした特別な空間で、他にはない上質な雰囲気をお楽しみください。親しみやすいスタッフが心を込めてサポートし、心地よい時間を演出いたします。ぜひ、お気軽にご来店ください。
        </div>
      </div>
    </div>
  );
}

export default About;
