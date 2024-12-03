import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";

import firstCard from "../assets/cards/1.png";
import secondCard from "../assets/cards/2.png";
import thirdCard from "../assets/cards/3.png";
import fourthCard from "../assets/cards/4.png";
import fifthCard from "../assets/cards/5.png";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Cards = () => {
  const progressCircle = useRef(null);
  const fractionRef = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };

  return (
    <div className="relative flex xl:justify-end justify-center z-100">
      <div className="2xl:w-[500px] xl:w-[400px] lg:w-[500px] md:w-[450px] w-[60vw]">
        <Swiper
          // loop={true}
          effect="cube"
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          navigation={true}
          modules={[EffectCube, Autoplay, Keyboard, Pagination, Navigation]}
          className="mySwiper"
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onPaginationUpdate={(swiper) => {
            fractionRef.current.textContent = `${swiper.activeIndex + 1} / 5`;
          }}
        >
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img
              src={firstCard}
              alt="First card"
              className="rounded-[5px] sm:rounded-[10px]"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img
              src={secondCard}
              alt="Second card"
              className="rounded-[5px] sm:rounded-[10px]"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img
              src={thirdCard}
              alt="Third card"
              className="rounded-[5px] sm:rounded-[10px]"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img
              src={fourthCard}
              alt="Fourth card"
              className="rounded-[5px] sm:rounded-[10px]"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img
              src={fifthCard}
              alt="Fifth card"
              className="rounded-[5px] sm:rounded-[10px]"
            />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 26 26" ref={progressCircle}>
              <circle cx="10" cy="10" r="8"></circle>
            </svg>
          </div>
          <div className="custom-fraction" ref={fractionRef}></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
