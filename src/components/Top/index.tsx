"use client";
import { motion } from "framer-motion";
import Title from "@/components/Top/Title";
//import News from "@/components/Top/News";
import Price from "@/components/Top/Price";
import Access from "@/components/Top/Access";
import Gallery from "@/components/Top/Gallery";
import About from "@/components/Top/About";
import styles from "./styles.module.scss";

function Top(): JSX.Element {
  const animation = {
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

  return (
    <main className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <section className={styles["title"]}>
          <Title />
        </section>
        <section className={styles["about"]}>
          <motion.div
            variants={animation}
            viewport={{ once: true, amount: 0 }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <About />
          </motion.div>
        </section>
        <section className={styles["price"]}>
          <motion.div
            variants={animation}
            viewport={{ once: true, amount: 0 }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Price />
          </motion.div>
        </section>
        <section className={styles["gallery"]}>
          <motion.div
            variants={animation}
            viewport={{ once: true, amount: 0 }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Gallery />
          </motion.div>
        </section>
        {/* <section className={styles["news"]}>
          <motion.div
            variants={animation}
            viewport={{ once: true, amount: 0 }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <News />
          </motion.div>
        </section> */}
        <section className={styles["access"]}>
          <motion.div
            variants={animation}
            viewport={{ once: true, amount: 0 }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Access />
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default Top;
