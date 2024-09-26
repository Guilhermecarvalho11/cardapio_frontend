/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card } from "../Cards";
import { CustomNavigation } from "../CustomNavigation";

export function Slide({ products }) {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={CustomNavigation}
      style={{ width: "100%", height: "auto" }}
      loop={false}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 150,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 120,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 120,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {products.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <Card
              icon={product.icon}
              image_url={product.image_url}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
