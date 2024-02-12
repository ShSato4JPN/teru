"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import photo01 from "/public/photo-01.jpg";
import photo02 from "/public/photo-02.jpg";

function About(): JSX.Element {
  const bottomToTop = {
    offscreen: {
      y: 250,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const righToLeft = {
    offscreen: {
      x: 250,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const leftToRight = {
    offscreen: {
      x: -250,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className={styles["about"]}>
      <div className={styles["about__background__image1"]}>
        <motion.div
          variants={righToLeft}
          viewport={{ once: true, amount: 0 }}
          initial="offscreen"
          whileInView="onscreen"
        >
          <Image
            src={photo01}
            width={800}
            height={800}
            style={{ objectFit: "cover" }}
            alt={"image1"}
          />
        </motion.div>
      </div>
      <div className={styles["about__background__image2"]}>
        <motion.div
          variants={leftToRight}
          viewport={{ once: true, amount: 0 }}
          initial="offscreen"
          whileInView="onscreen"
        >
          <Image
            src={photo02}
            width={800}
            height={800}
            style={{ objectFit: "cover" }}
            alt={"image2"}
          />
        </motion.div>
      </div>
      <motion.div
        variants={bottomToTop}
        viewport={{ once: true, amount: 0 }}
        initial="offscreen"
        whileInView="onscreen"
      >
        <div className={styles["about__wrapper"]}>
          <div className={styles["about__body"]}>
            <span className={styles["emphasis"]}>花魁</span>
            はスポーツ観戦やダーツを楽しみながら、くつろぎのひとときをお過ごしいただける場所です。和をテーマにした特別な空間で、他にはない上質な雰囲気をお楽しみください。親しみやすいスタッフが心を込めてサポートし、心地よい時間を演出いたします。ぜひ、お気軽にご来店ください。
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
