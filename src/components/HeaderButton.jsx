const HeaderButton = ({ link, title, markText, topText, bottomText }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        title={title}
        className="flex flex-row justify-between items-center gap-2 cursor-pointer text-black bg-white md:rounded-xl rounded-lg border-solid border-4 border-blue-600 xl:w-[300px] lg:w-[250px] md:w-[200px] lg:h-[70px] md:h-[50px] px-2 py-1 font-bold "
      >
        <div className="bg-blue-600 lg:rounded-xl md:rounded-md rounded-sm xl:w-[55px] lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] w-[20px] h-[20px] md:px-[20px] px-2 text-white xl:text-[50px] lg:text-[45px] md:text-[30px] text-[20px] flex justify-center items-center leading-none">
          {markText}
        </div>
        <div className="flex flex-col justify-center items-center gap-0 w-full h-full leading-none sm:flex hidden">
          <div className="text-black lg:text-[15px] md:text-[14px] text-[10px] w-full text-center">
            {topText}
          </div>
          <div className="text-blue-600 xl:text-[30px] lg:text-[24px] md:text-[17px] text-[12px] w-full text-center">
            {bottomText}
          </div>
        </div>
      </a>
    </>
  );
};

export default HeaderButton;
