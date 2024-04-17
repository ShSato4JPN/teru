"use client";

import About from "@/components/TeruTop/About";
import Access from "@/components/TeruTop/Access";
//import Casts from "@/components/TeruTop/Casts";
import Opening from "@/components/TeruTop/Opening";

import styles from "./style.module.scss";

export default function TeruTop() {
  return (
    <div className={styles.wrapper}>
      <Opening />
      <About />
      {/* <Casts /> */}
      <Access />
    </div>
  );
}
