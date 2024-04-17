"use client";

import styles from "./style.module.scss";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <div className={styles.message}>
          花魁はスポーツ観戦やダーツを楽しみながら、くつろぎのひとときをお過ごしいただける場所です。和をテーマにした特別な空間で、他にはない上質な雰囲気をお楽しみください。親しみやすいスタッフが心を込めてサポートし、心地よい時間を演出いたします。ぜひ、お気軽にご来店ください。
        </div>
        <div className={styles.sender}>店長より</div>
      </div>
    </div>
  );
}
