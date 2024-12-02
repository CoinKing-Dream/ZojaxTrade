import ContactUsImg from "../assets/follow/contact_us.svg";

const ContactUs = () => {
  return (
    <>
      <a
        href="https://share.hsforms.com/1q_E7-G2bTAujLieilOzYxg4igy0"
        target="_blank"
        title="Contact the Fund Manager"
        className="cursor-pointer flex justify-center lg:w-[170px] md:w-[150px] sm:w-[140px] w-[32px] lg:h-[60px] md:h-[50px] sm:h-[37px] h-[32px] relative text-white bg-gradient-to-r from-gray-100 to-transparent sm:p-1 rounded-[30px]"
      >
        <div className="relative flex items-center rounded-[30px] w-full h-full">
          <div className="cursor-pointer absolute left-[0px]" href="#">
            <img
              src={ContactUsImg}
              className="lg:w-[50px] md:w-[40px] w-[30px]"
            />
          </div>
          <div className="w-full h-full bg-[#357ca8] rounded-[25px] flex justify-end items-center pr-3 lg:text-[20px] text-[18px] sm:flex hidden">
            Contact Us
          </div>
        </div>
      </a>
    </>
  );
};

export default ContactUs;
