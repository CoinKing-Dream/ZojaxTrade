import FaceBookImg from "../assets/follow/facebook_Logo.svg";

const FollowUs = () => {
  // const ImgList = [YouTubeImg, TwitterImg, FaceBookImg]
  const ImgList = [FaceBookImg];
  return (
    <a
      href="https://www.facebook.com/profile.php?id=61569310988457"
      target="_blank"
      title="Follow our Facebook"
      className="cursor-pointer flex justify-center lg:w-[150px] md:w-[130px] sm:w-[120px] w-[32px] lg:h-[60px] md:h-[50px] sm:h-[37px] h-[32px] relative text-white bg-gradient-to-r from-gray-100 to-transparent sm:p-1 rounded-[30px]"
    >
      <div className="relative flex items-center rounded-[30px] w-full h-full">
        <div className="cursor-pointer absolute left-[0px]" href="#">
          {ImgList.map((item, idx) => (
            <img
              src={item}
              className="lg:w-[50px] md:w-[40px] w-[30px]"
              key={idx}
            />
          ))}
        </div>
        <div className="w-full h-full bg-[#357ca8] rounded-[25px] flex justify-end items-center pr-3 lg:text-[20px] text-[18px] sm:flex hidden">
          ollow Us
        </div>
      </div>
    </a>
  );
};

export default FollowUs;
