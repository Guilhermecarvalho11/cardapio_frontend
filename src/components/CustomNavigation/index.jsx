import { useSwiper } from "swiper/react";

export function CustomNavigation(preview, next) {
  const swiper = useSwiper();

  return (
    <div>
      <button onClick={() => swiper.slidePrev()}>{preview}</button>
      <button onClick={() => swiper.slideNext()}>{next}</button>
    </div>
  );
}
