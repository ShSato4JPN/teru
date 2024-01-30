"use client";
import styles from "./styles.module.scss";

function About(): JSX.Element {
  return (
    <div className={styles["about"]}>
      <div className={styles["about__wrapper"]}>
        <h1 className={styles["about__header"]}>花魁 oiran</h1>
        <div className={styles["about__body"]}>
          当店は和をテーマにしたガールバー兼スポーツバーです。楽しくお酒を楽しみながら、ダーツやスポーツ観戦もお楽しみいただけます。フレンドリーな店員がお出迎えし、心地よいひとときを提供します。是非、お気軽にご来店ください。
        </div>
      </div>
    </div>
  );
}

export default About;
