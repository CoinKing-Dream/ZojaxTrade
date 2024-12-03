import ZojaxLogo from "../components/ZojaxLogo";
import DivideLine from "../components/DivideLine";
import FollowUs from "../components/FollowUs";
import ContactUs from "../components/ContactUs";
import HeaderButton from "../components/HeaderButton";

const Header = () => {
  return (
    <div className="w-full mt-8 flex flex-col gap-5">
      <div className="flex flex-row justify-between items-end">
        <ZojaxLogo />
        <div className="flex flex-row justify-between items-center sm:gap-2 gap-3 mr-3">
          <HeaderButton link={"https://www.facebook.com/profile.php?id=61569310988457"} markText={"f"} topText={"Follow us on"} bottomText={"facebook"}/>
          <HeaderButton link={"https://share.hsforms.com/1q_E7-G2bTAujLieilOzYxg4igy0"} markText={"C"} topText={"Contact us"} bottomText={"Fund Manager"}/>
        </div>
      </div>
      <DivideLine text={""} />
    </div>
  );
};

export default Header;
