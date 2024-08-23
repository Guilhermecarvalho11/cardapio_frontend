import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Card } from "../Cards";
import { CustomNavigation } from "../CustomNavigation";

export function Slide({ products }) {
  return (
    <Swiper
      spaceBetween={250}
      slidesPerView={2}
      pagination={{ clickable: true }}
      navigation={CustomNavigation}
      style={{ width: "100%", height: "auto" }}
      loop={false}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Card
            icon={product.icon}
            image={product.image}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slide.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
