import Header from "../sections.jsx/Header";
import CopyTradingText from "../sections.jsx/CopyTradingText";
import Cards from "../components/Cards";
import Partners from "../components/Partners";
import GradientImg from "../assets/gradient.svg";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full flex xl:flex-row xl:items-center xl:justify-around flex-col xl:mt-[80px] sm:mt-[60px] mt-[40px] gap-5">
        <img
          className="absolute top-0 left-0 w-[100vw] h-[100%]"
          src={GradientImg}
        />
        <CopyTradingText />
        <Cards />
      </div>
      <Partners />
    </div>
  );
};

export default Home;
