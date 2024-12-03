import lowImg from "../assets/risks/low.png";
import highImg from "../assets/risks/high.png";
import { Link } from "react-router-dom";

const RiskImg = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center 2xl:w-[60%] w-full gap-5">
        <Link to={"/trading_funds?#low"}>
          <img
            src={lowImg}
            className="cursor-pointer 2xl:w-[170px] xl:w-[130px] lg:w-[15vw] md:w-[150px] w-[30vw] rounded-lg border-1 drop-shadow-[20px_20px_10px_rgba(50,50,50,0.85)] hover:scale-[1.02]"
          />
        </Link>
        {/* <Link to={"/trading_funds?#low"}>
          <img
            src={lowImg}
            className="cursor-pointer 2xl:w-[170px] xl:w-[130px] lg:w-[15vw] md:w-[150px] w-[20vw] rounded-lg border-1 drop-shadow-[20px_20px_10px_rgba(50,50,50,0.85)] hover:scale-[1.02]"
          />
        </Link> */}
        <Link to={"/trading_funds?#high"}>
          <img
            src={highImg}
            className="cursor-pointer 2xl:w-[170px] xl:w-[130px] lg:w-[15vw] md:w-[150px] w-[30vw] rounded-lg border-1 drop-shadow-[20px_20px_10px_rgba(50,50,50,0.85)] hover:scale-[1.02]"
          />
        </Link>
      </div>
    </>
  );
};

export default RiskImg;
