/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Card } from "../Cards";
import { CustomNavigation } from "../CustomNavigation";

export function Slide({ products }) {
  console.log("products", products);

  return (
    <Swiper
      spaceBetween={250}
      slidesPerView={2}
      pagination={{ clickable: true }}
      navigation={CustomNavigation}
      style={{ width: "100%", height: "auto" }}
      loop={false}
    >
      {products.map((product) => {
        console.log("Image URL:", product.image_url);
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
