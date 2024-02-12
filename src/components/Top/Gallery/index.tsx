"use client";
import Image from "next/image";
import React from "react";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Gallery(): JSX.Element {
  const imagePaths = [
    "/photo-01.jpg",
    "/photo-02.jpg",
    "/photo-03.jpg",
    "/photo-04.jpg",
    "/photo-05.jpg",
  ];

  const pagination: SwiperOptions["pagination"] = {
    clickable: true,
  };
  const swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    freeMode: true,
    pagination: pagination,
    modules: [FreeMode, Pagination],
  };

  return (
    <div className={styles["gallery"]}>
      <div className={styles["gallery__wrapper"]}>
        <div className={styles["gallery__body"]}>
          <Swiper {...swiperOptions} className={styles["swiper"]}>
            {imagePaths.map((path, i) => (
              <SwiperSlide>
                <div className={styles["gallery__image"]} key={`${path}-${i}`}>
                  <Image
                    src={path}
                    width={600}
                    height={600}
                    style={{ objectFit: "cover" }}
                    alt={`shop image no ${i}`}
                    className={styles["gallery__image"]}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
