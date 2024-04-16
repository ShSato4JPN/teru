"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import photo01 from "/public/photo-01.jpg";
import photo02 from "/public/photo-02.jpg";

function About(): JSX.Element {
  const message = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.9,
      },
    },
  };

  const leftImage = {
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

  const rightImage = {
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
      <motion.div
        variants={leftImage}
        viewport={{ once: true }}
        initial="offscreen"
        whileInView="onscreen"
        className={styles["about__background__image1"]}
      >
        <Image
          src={photo01}
          width={800}
          height={800}
          style={{ objectFit: "cover" }}
          alt={"image1"}
        />
      </motion.div>
      <motion.div
        variants={rightImage}
        viewport={{ once: true }}
        initial="offscreen"
        whileInView="onscreen"
        className={styles["about__background__image2"]}
      >
        <Image
          src={photo02}
          width={800}
          height={800}
          style={{ objectFit: "cover" }}
          alt={"image2"}
        />
      </motion.div>
      <motion.div
        variants={message}
        viewport={{ once: true, margin: "-150px" }}
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
