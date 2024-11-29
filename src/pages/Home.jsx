import Header from "../sections.jsx/Header";
import Cards from "../components/Cards";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <div>Copy Trading</div>
          <div>Join the World's Top Crypto Trading Experts</div>
        </div>
        <div>

        </div>
      </div>
      <Partners />
    </div>
  );
};

export default Home;
