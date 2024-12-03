import Header from "../sections.jsx/Header";
import CopyTradingText from "../sections.jsx/CopyTradingText";
import Cards from "../components/Cards";
import Partners from "../components/Partners";
import GradientImg from "../assets/gradient.svg";
import RiskImg from "../sections.jsx/RiskImg";
import IndicateImg from "../assets/indicator.png";
import { useState } from "react";

const Home = () => {
  const [indicateChatbot, setIndicateChatbot] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {indicateChatbot && (
        <>
          <div
            className="absolute w-[100vw] h-[100vh] bg-gray-100 opacity-50 z-50"
            onClick={() => setIndicateChatbot(false)}
          ></div>
          <img
            src={IndicateImg}
            className="absolute right-[20px] bottom-[50px] opacity-100 animate-bounce w-[40px] z-50"
          />
        </>
      )}
      <Header />
      <div className="w-full flex xl:flex-row xl:items-center xl:justify-around flex-col xl:mt-[10px] sm:mt-[50px] mt-[40px] xl:gap-5 lg:gap-[80px] sm:gap-[50px] gap-[30px]">
        <img
          className="absolute top-0 left-0 w-[100vw] h-[100%] z-[-100]"
          src={GradientImg}
        />
        <CopyTradingText setIndicateChatbot={setIndicateChatbot} />
        <div className="2xl:w-[49%] w-full 2xl:h-[550px] lg:h-[400px] flex flex-col justify-end items-center gap-5">
          <Cards />
          <RiskImg />
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default Home;
