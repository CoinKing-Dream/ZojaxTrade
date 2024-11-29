import ZojaxLogo from "../components/ZojaxLogo";
import DivideLine from "../components/DivideLine";
import FollowUs from "../components/FollowUs";

const Header = () => {
  return (
    <div className="w-full mt-8 flex flex-col gap-5">
      <div className="flex flex-row justify-between items-end">
        <ZojaxLogo />
        <FollowUs />
      </div>
      <DivideLine text={""} />
    </div>
  );
};

export default Header;
