const FundButton = ({ link, title, text }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        title={title}
        className="flex justify-center items-center cursor-pointer text-black bg-white md:rounded-xl rounded-lg border-solid border-4 border-blue-600 2xl:w-[230px] xl:w-[200px] lg:w-[30%] md:w-[40%] w-[80%] xl:h-[70px] md:h-[60px] h-[50px] text-blue-600 xl:text-[24px] md:text-[22px] sm:text-[18px] text-[15px] font-bold hover:text-blue-400"
      >
        {text}
      </a>
    </>
  );
};

export default FundButton;
