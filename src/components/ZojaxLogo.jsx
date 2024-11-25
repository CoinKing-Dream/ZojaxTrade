import zojaxLogo from "/zojax-logo.png";
import { Link } from "react-router-dom";

const ZojaxLogo = () => {
  return (
    <>
      <div className="flex items-center ml-[20px] mt-[10px]">
        <Link to={"/"}>
          <img src={zojaxLogo} className="w-[130px]" alt="Zojax Logo" />
        </Link>
      </div>
    </>
  );
};

export default ZojaxLogo;
