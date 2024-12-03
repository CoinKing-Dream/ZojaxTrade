import CopyTradingText from "../sections/CopyTradingText";
import Cards from "../components/Cards";
import Partners from "../components/Partners";
import GradientImg from "../assets/gradient.svg";
import RiskImg from "../sections/RiskImg";

const Home = ({setIndicateChatbot}) => {

  return (
    <div className="w-full flex flex-col items-center">
      
      
      <div className="w-full flex xl:flex-row xl:items-center xl:justify-between flex-col xl:mt-[10px] sm:mt-[50px] mt-[40px] lg:gap-[80px] sm:gap-[50px] gap-[30px]">
        <img
          className="absolute top-0 left-0 w-[100vw] h-[100%] z-[-100]"
          src={GradientImg}
        />
        <CopyTradingText setIndicateChatbot={setIndicateChatbot} />
        <div className="2xl:w-[49%] w-full 2xl:h-[500px] lg:h-[400px] flex flex-col justify-end items-center gap-5">
          <Cards />
          <RiskImg />
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default Home;
