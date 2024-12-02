import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import 'swiper/css/navigation';
import "swiper/css/effect-cards";
import firstCard from "../assets/cards/1.png";
import secondCard from "../assets/cards/2.png";
import thirdCard from "../assets/cards/3.png";
import fourthCard from "../assets/cards/4.png";
import fifthCard from "../assets/cards/5.png";
import leftRedArrowImg from "../assets/left-red-arrow.png";
import rightRedArrowImg from "../assets/right-red-arrow.png";
import leftBrownArrowImg from "../assets/left-brown-arrow.png";
import rightBrownArrowImg from "../assets/right-brown-arrow.png";

const Cards = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className="relative flex xl:justify-end justify-center 2xl:w-[50%] w-full z-100 2xl:pr-[50px]">
      <div className="2xl:w-[500px] xl:w-[400px] lg:w-[500px] md:w-[450px] sm:w-[70vw] w-[65vw]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
          }}
          className="flex flex-row items-center"
          onSlideChange={(swiper) => setCurrentSlide(swiper?.activeIndex)}
        >
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={firstCard} alt="First card" />
          </SwiperSlide>
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={secondCard} alt="Second card" />
          </SwiperSlide>
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={thirdCard} alt="Third card" />
          </SwiperSlide>
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={fourthCard} alt="Fourth card" />
          </SwiperSlide>
          <SwiperSlide className="rounded-[10px] sm:rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={fifthCard} alt="Fifth card" />
          </SwiperSlide>
          <div className={`${currentSlide==4?"opacity-80":"opacity-100"} cursor-pointer flex justify-center items-center swiper-button-next1 absolute top-[50%] right-[-100px] sm:right-[-120px] cursor-pointer mx-12 z-10000`}>
            <img src={currentSlide==4?rightBrownArrowImg:rightRedArrowImg} className="sm:w-[45px] sm:h-[15px] w-[35px] h-[10px]"/>
          </div>
          <div className={`${currentSlide==0?"opacity-80":"opacity-100"} cursor-pointer flex justify-center items-center swiper-button-prev1 absolute top-[50%] left-[-100px] sm:left-[-120px] cursor-pointer mx-12 z-10000`}>
            <img src={currentSlide==0?leftBrownArrowImg:leftRedArrowImg} className="sm:w-[45px] sm:h-[15px] w-[35px] h-[10px]"/>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
