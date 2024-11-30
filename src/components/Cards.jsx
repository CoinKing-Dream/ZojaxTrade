import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import 'swiper/css/effect-cards';
import firCard from "../assets/cards/1.png";
// import secCard from "../../assets/cards/2.png";
// import thirdCard from "../../assets/cards/3.png";

const Cards = () => {
  return (
    <div className="xl:place-items-end place-items-center xl:pt-28 2xl:w-[55%] w-[100%]">
      <div className="lg:w-[500px] md:w-[450px] w-[70vw]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className=""
        >
          <SwiperSlide className="rounded-[20px]">
            <img src={firCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px]">
            <img src={firCard} />
          </SwiperSlide>
          <SwiperSlide className="rounded-[20px]">
            <img src={firCard} />
          </SwiperSlide>
          {/* <SwiperSlide>
          <img src={secCard} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thirdCard} />
        </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
