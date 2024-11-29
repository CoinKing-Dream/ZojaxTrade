import zojaxLogo from "/logo.png";
import { Link } from "react-router-dom";

const ZojaxLogo = () => {
  return (
    <>
      <div className="flex items-center ml-[20px] mt-[10px]">
        <Link to={"/"}>
          <img
            src={zojaxLogo}
            className="lg:w-[250px] md:w-[200px] sm:w-[150px] w-[100px]"
            alt="Zojax Logo"
          />
        </Link>
      </div>
    </>
  );
};

export default ZojaxLogo;
