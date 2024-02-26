// import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import IMG from '/images/1.jpg'
// import Swiper styles
// import "swiper/swiper.min.css";

const SwiperCard = ({ imgs }) => {
  // const data = JSON.parse(imgs);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imgs.map((img, key) => (
        <SwiperSlide key={key}>
          <img src={img.image} alt={img.title} className="slideImg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCard;
