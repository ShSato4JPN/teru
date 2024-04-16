"use client";
import Title from "./Title";
//import News from "@/components/Top/News";
// import Sns from "@/components/Top/Sns";
import Price from "./Price";
import Access from "./Information";
//import Gallery from "@/components/Top/Gallery";
import About from "./About";
import styles from "./styles.module.scss";

function Top(): JSX.Element {
  return (
    <main className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <section className={styles["title"]}>
          <Title />
        </section>
        <section className={styles["about"]}>
          <About />
        </section>
        <section className={styles["price"]}>
          <Price />
        </section>
        {/* <section className={styles["sns"]}>
          <Sns />
        </section> */}
        {/* <section className={styles["gallery"]}>
          <motion.div
            variants={animation}
            viewport={{ once: true, amount: 0 }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Gallery />
          </motion.div>
        </section> */}
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
        <section className={styles["information"]}>
          <Access />
        </section>
      </div>
    </main>
  );
}

export default Top;
