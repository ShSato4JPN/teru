"use client";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimationProps } from "framer-motion";
import { CgChevronRight } from "react-icons/cg";
import config from "@/config";
import Link from "next/link";
import styles from "./styles.module.scss";

function HamburgerMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const show: AnimationProps["animate"] = {
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.5,
    },
  };

  const hide: AnimationProps["animate"] = {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  };

  const items = config.menu.map((item) => (
    <li className={styles["menu__item"]} key={item.title}>
      <Link href={item.link}>
        <span className={styles["menu__item__title"]}>{item.title}</span>
        <span className={styles["menu__item__subtitle"]}>{item.subtitle}</span>
        <CgChevronRight className={styles["menu__item__chevron"]} />
      </Link>
    </li>
  ));

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
      <motion.nav initial={false} animate={isOpen ? show : hide}>
        <div className={styles["menu"]}>
          <div className={styles["menu__wrapper"]}>
            <ul>{items}</ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default HamburgerMenu;
