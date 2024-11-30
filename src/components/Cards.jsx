import React from "react";
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

const Cards = () => {
  return (
    <div className="relative flex xl:justify-end justify-center xl:pt-28 2xl:w-[50%] w-full z-100">
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
          <div className="cursor-pointer flex justify-center items-center swiper-button-prev1 w-[25px] h-[25px] text-[25px] sm:w-[30px] sm:h-[30px] sm:text-[30px] rounded-full bg-gray-300 absolute top-[50%] right-[-100px] sm:right-[-120px] cursor-pointer mx-12 text-gray-800 z-10000">
            &gt;
          </div>
          <div className="cursor-pointer flex justify-center items-center swiper-button-next1 w-[25px] h-[25px] text-[25px] sm:w-[30px] sm:h-[30px] sm:text-[30px] rounded-full bg-gray-300 absolute top-[50%] left-[-100px] sm:left-[-120px] cursor-pointer mx-12 text-gray-800 z-10000">
            &lt;
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
