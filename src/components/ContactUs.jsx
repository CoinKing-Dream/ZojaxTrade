import ContactUsImg from "../assets/follow/contact_us.svg";

const ContactUs = () => {
  return (
    <>
      <a
        href="https://share.hsforms.com/1q_E7-G2bTAujLieilOzYxg4igy0"
        target="_blank"
        title="Follow our Facebook"
        className="flex flex-row justify-between items-center gap-2 cursor-pointer text-black bg-white rounded-xl border-solid border-4 border-blue-600 w-[260px] h-[70px] px-2 py-1 font-bold "
      >
        <div className="bg-blue-600 rounded-xl w-[55px] h-[55px] px-[20px] text-white text-[45px] flex justify-center items-center">
          C
        </div>
        <div className="flex flex-col justify-center items-center gap-0 w-full h-full leading-none">
          <div className="text-black text-[17px] w-full text-center">
            Contact Us
          </div>
          <div className="text-blue-600 text-[24px] w-full text-center">
            Fund Manager
          </div>
        </div>
      </a>
    </>
  );
};

export default ContactUs;

// import ContactUsImg from "../assets/follow/contact_us.svg";

// const ContactUs = () => {
//   return (
//     <>
//       <a
//         href="https://share.hsforms.com/1q_E7-G2bTAujLieilOzYxg4igy0"
//         target="_blank"
//         title="Contact the Fund Manager"
//         className="cursor-pointer flex justify-center lg:w-[170px] md:w-[150px] sm:w-[140px] w-[100px] lg:h-[60px] md:h-[50px] sm:h-[37px] h-[35px] relative text-white bg-gradient-to-r from-gray-100 to-transparent sm:p-1 p-[2px] rounded-[30px]"
//       >
//         <div className="relative flex items-center rounded-[30px] w-full h-full">
//           <div className="cursor-pointer absolute left-[0px]" href="#">
//             {/* <img
//               src={ContactUsImg}
//               className="lg:w-[50px] md:w-[40px] w-[30px]"
//             /> */}
//           </div>
//           <div className="w-full h-full bg-[#357ca8] rounded-[25px] flex justify-end items-center pr-3 lg:text-[20px] sm:text-[18px] text-[15px]">
//             Contact Us
//           </div>
//         </div>
//       </a>
//     </>
//   );
// };

// export default ContactUs;
