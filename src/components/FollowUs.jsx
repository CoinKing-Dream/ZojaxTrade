
const FollowUs = () => {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=61569310988457"
      target="_blank"
      title="Follow our Facebook"
      className="flex flex-row justify-between items-center gap-2 cursor-pointer text-black bg-white rounded-xl border-solid border-4 border-blue-600 lg:w-[260px] lg:h-[70px] md:w-[240px] md:h-[60px] px-2 py-1 font-bold "
    >
      <div className="bg-blue-600 rounded-xl lg:w-[55px] lg:h-[55px] md:w-[45px] md:h-[45px] px-[20px] text-white lg:text-[50px] md:text-[40px] flex justify-center items-center">f</div>
      <div className="flex flex-col justify-center items-center gap-0 w-full h-full leading-none">
        <div className="text-black text-[17px] w-full text-center">Follow us on</div>
        <div className="text-blue-600 text-[30px] w-full text-center">facebook</div>
      </div>
    </a>
  );
};

export default FollowUs;
