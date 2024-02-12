"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import styles from "./styles.module.scss";
// swiper's styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

type BackgroundSwiperProps = {
  imagePaths: StaticImageData[];
};

function BackgroundSwiper({ imagePaths }: BackgroundSwiperProps): JSX.Element {
  const pagination: SwiperOptions["pagination"] = {
    clickable: true,
    bulletActiveClass: styles["swiper-pagination-bullet-active"],
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
    <Swiper {...swiperOptions} className={styles["swiper"]}>
      {imagePaths.map((path, i) => (
        <SwiperSlide className={styles["swiper-slide"]} key={`${path}-${i}`}>
          <Image
            src={path}
            width={800}
            height={800}
            style={{ objectFit: "cover" }}
            alt={`shop image no ${i}`}
            className={styles["swiper-image"]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BackgroundSwiper;
