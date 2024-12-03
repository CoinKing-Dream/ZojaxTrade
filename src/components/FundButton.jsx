const FundButton = ({ link, title, text }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        title={title}
        className="flex justify-center items-center cursor-pointer text-black bg-white rounded-xl border-solid border-4 border-blue-600 w-[300px] h-[70px] text-blue-600 text-[24px] font-bold hover:text-blue-400"
      >
        {text}
      </a>
    </>
  );
};

export default FundButton;
