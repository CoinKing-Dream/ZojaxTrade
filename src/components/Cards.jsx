import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import 'swiper/css/effect-cards';
import firstCard from "../assets/cards/1.png";
import secondCard from "../assets/cards/2.png";
import thirdCard from "../assets/cards/3.png";
import fourthCard from "../assets/cards/4.png";
import fifthCard from "../assets/cards/5.png";

const Cards = () => {
  return (
    <div className="flex xl:justify-end justify-center xl:pt-28 2xl:w-[50%] w-full">
      <div className="lg:w-[500px] md:w-[450px] w-[80vw]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className=""
        >
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400">
            <img src={firstCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400">
            <img src={secondCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400">
            <img src={thirdCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400">
            <img src={fourthCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px] border-[1px] border-blue-400">
            <img src={fifthCard} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
