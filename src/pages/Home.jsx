import Header from "../sections.jsx/Header";
import CopyTradingText from "../sections.jsx/CopyTradingText";
import Cards from "../components/Cards";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full">
        <CopyTradingText />
        <Cards />
      </div>
      <Partners />
    </div>
  );
};

export default Home;
