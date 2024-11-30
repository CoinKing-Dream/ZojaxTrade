import GuidePDF from "../assets/Presentation.pdf";

const CopyTradingText = () => {
  return (
    <div className="2xl:w-[50%] w-[100%] flex flex-col z-[11] items-center">
      <p className="xl:text-[56px] md:text-[40px] text-[40px] text-center xl:text-left xl:mt-10 text-[white] font-bold drop-shadow-[0_5px_2px_rgba(0,0,0,0.75)]  ">
        Copy Trading
      </p>
      <p className="2xl:ml-[100px] xl:ml-[50px] indent-1 xl:w-[100%] lg:w-[70%] sm:w-[80%] w-[90%] xl:text-[20px] md:text-[18px] sm:text-[15px] text-[13px]  text-left xl:text-left mt-10 px-4 text-[white]">
        <div>
          The Dog Lovers CryptoCurrency Investment Fund if for small investors
          to invest in Dog Meme Coins and. have a custom Bot make profitable
          trades 24/7. The minimum investment is $25,
        </div>
        <div>
          View the <span className="font-bold">View Guide</span> button below
          for a slide presentation on how the Fund operates.
        </div>
        <div>
          If you are ready to invest, click the{" "}
          <span className="font-bold">Sign Up</span> button below
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
