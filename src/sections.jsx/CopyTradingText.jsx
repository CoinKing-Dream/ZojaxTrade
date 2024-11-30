import GuidePDF from "../assets/Presentation.mp4";

const CopyTradingText = () => {
  return (
    <div className="2xl:w-[50%] w-[100%] flex flex-col z-[11] items-center">
      <p className="2xl:ml-[100px] xl:ml-[50px] xl:text-[30px] md:text-[30px] sm:text-[25px] text-[15px] text-center xl:mt-10 text-white font-bold drop-shadow-[0_5px_2px_rgba(0,0,0,0.75)]">
        Dogs Lovers Cryptocurrency Investment Fund
      </p>
      <p className="flex flex-col md:gap-4 sm:gap-3 gap-2 2xl:ml-[100px] xl:ml-[50px] xl:w-[100%] lg:w-[70%] w-[90%] xl:text-[20px] md:text-[18px] sm:text-[15px] text-[13px]  text-left xl:text-left mt-5 px-4 text-[white]">
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
          <a href={GuidePDF} className="font-black">
            presentation
          </a>{" "}
          and chat here with Dean Powers, the Founder and CEO of{" "}
          <a href="https://Zojax.com" className="font-black">
            Zojax Group
          </a>
          , LLC.
        </div>
        <div>
          The minimum investment is $25 and Fund Profits distributed daily.
        </div>
      </p>
      <div className="mt-10 focus:outline-none xl:w-[400px] text-center xl:text-left flex xl:flex-row flex-col justify-between items-center gap-10">
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
