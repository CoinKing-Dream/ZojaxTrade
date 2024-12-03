import lowImg from "../assets/risks/low.png";

const RiskImg = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center 2xl:w-[50%] w-full gap-1">
        <img src={lowImg} className="cursor-pointer 2xl:w-[170px] xl:w-[140px] lg:w-[170px] md:w-[150px] w-[23%] rounded-lg border-1 drop-shadow-[20px_20px_10px_rgba(50,50,50,0.85)] hover:scale-[1.02]"/>
        <img src={lowImg} className="cursor-pointer 2xl:w-[170px] xl:w-[140px] lg:w-[170px] md:w-[150px] w-[23%] rounded-lg border-1 drop-shadow-[20px_20px_10px_rgba(50,50,50,0.85)] hover:scale-[1.02]" />
        <img src={lowImg} className="cursor-pointer 2xl:w-[170px] xl:w-[140px] lg:w-[170px] md:w-[150px] w-[23%] rounded-lg border-1 drop-shadow-[20px_20px_10px_rgba(50,50,50,0.85)] hover:scale-[1.02]" />
      </div>
    </>
  );
};

export default RiskImg;
