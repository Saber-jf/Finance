import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules

import CoinCart from "./CoinCart";

export default function CoinSlider() {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          300: {
            // width: 300,
            slidesPerView: 1.4,
          },
          400: {
            // width: 300,
            slidesPerView: 2.4,
          },

          768: {
            // width: 768,
            slidesPerView: 2.4,
          },
        }}
        spaceBetween={10}
        className="mySwiper"
      >
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
        <SwiperSlide>
          <CoinCart />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
