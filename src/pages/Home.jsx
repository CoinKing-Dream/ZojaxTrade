import Header from "../sections.jsx/Header";
import CopyTradingText from "../sections.jsx/CopyTradingText";
import Cards from "../components/Cards";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full flex xl:flex-row xl:items-center xl:justify-around flex-col relative md:mt-[80px] sm:mt-[60px] mt-[40px] gap-5">
        <CopyTradingText />
        <Cards />
      </div>
      <Partners />
    </div>
  );
};

export default Home;
