import GuidePDF from "../assets/Presentation.mp4";

const CopyTradingText = () => {
  return (
    <div className="2xl:w-[50%] w-[100%] flex flex-col z-[11] items-center justify-center">
      <p className="2xl:ml-[100px] xl:ml-[50px] 2xl:text-[30px] xl:text-[25px] md:text-[30px] sm:text-[25px] text-[15px] text-center 2xl:mt-10 xl:mt-2 text-white font-bold">
        Dogs Lovers Cryptocurrency Investment Fund
      </p>
      <p className="flex flex-col md:gap-4 sm:gap-3 gap-2 2xl:ml-[100px] xl:ml-[50px] xl:w-[100%] lg:w-[70%] w-[90%] 2xl:text-[20px] xl:text-[16px] md:text-[18px] sm:text-[15px] text-[13px]  text-left xl:text-left mt-5 px-4 text-[white]">
        <div>
          Invest in dog meme coins such as Doge and Shiba and use a custom
          Trading Bot to automate your trades, 24X7.
        </div>
        <div>
          We allocate your investment into a portfolio of six meme coins using a
          market neutral strategy that protects you from market crashes.
        </div>
        <div>
          View our{" "}
          <a href={GuidePDF}>
            presentation
          </a>{" "}
          and chat here with Dean Powers, the Founder and CEO of{" "}
          <a href="https://Zojax.com">
            Zojax Group
          </a>
          , LLC.
        </div>
        <div>
          The minimum investment is $25 and Fund Profits distributed daily.
        </div>
      </p>
      <div className="mt-10 focus:outline-none xl:w-[400px] text-center xl:text-left flex xl:flex-row flex-col justify-between items-center sm:gap-10 gap-5 ">
        <a href="https://crypto.zojax.com/pro/auth/register/">
          <button className="sign-up-style">Sign Up</button>
        </a>
        <a className="viewButton text-center" href={GuidePDF} target="_blank">
          Presentation
        </a>
      </div>
    </div>
  );
};

export default CopyTradingText;
