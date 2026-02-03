"use client";

import { Swiper } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface AppSwiperProps extends SwiperProps {
  children: React.ReactNode;
}

const AppSwiper = ({ children, ...props }: AppSwiperProps) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      className="w-full!"
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        400: { slidesPerView: 1.1, spaceBetween: 10 },
        440: { slidesPerView: 1.2, spaceBetween: 10 },
        550: { slidesPerView: 1.5, spaceBetween: 10 },
        640: { slidesPerView: 1.25, spaceBetween: 10 },
        768: { slidesPerView: 1.45, spaceBetween: 10 },
        920: { slidesPerView: 1.75, spaceBetween: 10 },
        1024: { slidesPerView: 1, spaceBetween: 10 },
        1280: { slidesPerView: 1.2, spaceBetween: 15 },
        1440: { slidesPerView: 1.3, spaceBetween: 20 },
      }}
      pagination={{ clickable: true }}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default AppSwiper;
