"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import styles from "./style.module.scss";

// swiper's styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function Top(): JSX.Element {
  const pagination: SwiperOptions["pagination"] = {
    clickable: true,
    bulletActiveClass: styles["swiper-pagination-bullet-active"],
  };
  const autoplay: SwiperOptions["autoplay"] = {
    delay: 5000,
    disableOnInteraction: false,
  };

  return (
    <>
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        pagination={pagination}
        autoplay={autoplay}
        loop={true}
        effect="fade"
        className={styles["swiper"]}
      >
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Top;
