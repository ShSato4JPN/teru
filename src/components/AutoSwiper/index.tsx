"use client";

import Image from "next/image";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

// swiper's images
import photo01 from "/public/swiper/photo-01.jpg";
import photo02 from "/public/swiper/photo-02.jpg";
import photo03 from "/public/swiper/photo-03.jpg";
import photo04 from "/public/swiper/photo-04.jpg";
import photo05 from "/public/swiper/photo-05.jpg";

import styles from "./styles.module.scss";
// swiper's styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function AutoSwiper(): JSX.Element {
  const images = [photo01, photo02, photo03, photo04, photo05];

  const pagination: SwiperOptions["pagination"] = {
    bulletActiveClass: styles.activeBullet,
    bulletClass: styles.bullet,
  };

  const autoplay: SwiperOptions["autoplay"] = {
    delay: 5000,
    disableOnInteraction: false,
  };

  const swiperOptions: SwiperOptions = {
    modules: [EffectFade, Pagination, Autoplay],
    pagination: pagination,
    autoplay: autoplay,
    effect: "fade",
    loop: true,
    speed: 2000,
  };

  return (
    <Swiper {...swiperOptions} className={styles.swiper}>
      {images.map((path, i) => (
        <SwiperSlide key={`${path}`}>
          <Image
            src={path}
            width={800}
            height={800}
            style={{ objectFit: "cover" }}
            alt={`shop image no ${i}`}
            className={styles.swiperImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
