import DivideLine from "./DivideLine";
import PionexLogo from "../assets/logo/pionex.png";
import KuCoinLogo from "../assets/logo/kucoin.png";
import FsLogo from "../assets/logo/fs.png";

const Partners = () => {
  const logoList = [KuCoinLogo, PionexLogo, FsLogo];

  return (
    <>
      <div className="w-full flex flex-col items-center md:mt-[100px] sm:mt-[70px] mt-[50px] mb-[10px]">
        <DivideLine text={"Partners"} />
        <div className="flex flex-row items-center xl:gap-[200px] gap-10 justify-between my-5">
          {logoList.map((item, idx) => (
            <img
              src={item}
              key={idx}
              className={` ${
                idx == 1
                  ? "md:h-[30px] h-[16px]"
                  : idx == 2
                  ? "md:h-[50px] h-[30px]"
                  : "md:h-[80px] h-[40px]"
              }`}
            />
          ))}
        </div>
        <DivideLine text={""} />
      </div>
    </>
  );
};

export default Partners;
