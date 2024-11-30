const DivideLine = ({ text }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center relative">
        <div className="absolute z-1 w-full md:h-[2px] h-[1px] bg-gradient-to-r from-transparent from-gray-300 via-50% via-gray-200 to-transparent to-100%"></div>
        {text && <div className="absolute z-2 bg-[#357ca8] px-4 py-2 md:text-[30px] sm:text-[25px] text-[20px]">{text}</div>}
      </div>
    </>
  );
};

export default DivideLine;
