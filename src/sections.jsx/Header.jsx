import ZojaxLogo from "../components/ZojaxLogo";
import DivideLine from "../components/DivideLine";
import FollowUs from "../components/FollowUs";
import ContactUs from "../components/ContactUs";

const Header = () => {
  return (
    <div className="w-full mt-8 flex flex-col gap-5">
      <div className="flex flex-row justify-between items-end">
        <ZojaxLogo />
        <div className=" flex flex-row justify-between items-center sm:gap-2 gap-3 mr-3">
          <FollowUs />
          <ContactUs />
        </div>
      </div>
      <DivideLine text={""} />
    </div>
  );
};

export default Header;
