import lowImg from "../assets/risks/low.png";
import highImg from "../assets/risks/high.png";

import FundCards from "../components/FundCards";

const TradeFunds = () => {
  return (
    <>
      <div className="w-full h-full flex md:flex-row lg:justify-center md:justify-around items-center flex-col xl:gap-[100px] lg:gap-[50px] md:gap-[20px] gap-[50px] my-10">
        <FundCards id={"low"} link={lowImg} fundBtn={"Join the low risk fund"} fundLink={"https://crypto.zojax.com/pro/auth/register/"}/>
        {/* <FundCards id="low" link={lowImg} fundBtn={"Join the low risk fund"} /> */}
        <FundCards id={"high"} link={highImg} fundBtn={"Join the high risk fund"} fundLink={"https://crypto.zojax.com/pro/auth/register/"}/>
      </div>
    </>
  );
};

export default TradeFunds;
