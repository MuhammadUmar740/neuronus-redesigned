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
      slidesPerView={1.35}
      spaceBetween={10}
      pagination={{ clickable: true }}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default AppSwiper;
