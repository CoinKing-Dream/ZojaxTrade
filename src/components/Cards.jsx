import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import 'swiper/css/effect-cards';
import firstCard from "../assets/cards/1.png";
import secondCard from "../assets/cards/2.png";
import thirdCard from "../assets/cards/3.png";
import fourthCard from "../assets/cards/4.png";
import fifthCard from "../assets/cards/5.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Cards = () => {
  const swiper = useSwiper();

  return (
    <div className="flex xl:justify-end justify-center xl:pt-28 2xl:w-[50%] w-full">
      {/* <button className="cursor-pointer mr-10" onClick={() => swiper.slideNext()}>A</button> */}
      <div className="lg:w-[500px] md:w-[450px] w-[80vw]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
        >
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={firstCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={secondCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={thirdCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={fourthCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400 drop-shadow-[2px_3px_5px_rgba(200,200,200,0.85)]">
            <img src={fifthCard} />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <button className="cursor-pointer ml-12 text-black" onClick={() => swiper.slidePrev()}>B</button> */}
    </div>
  );
};

export default Cards;
