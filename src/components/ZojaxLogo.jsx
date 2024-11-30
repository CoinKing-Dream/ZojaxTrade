import zojaxLogo from "/logo.png";

const ZojaxLogo = () => {
  return (
    <>
      <div className="flex items-center ml-[20px] mt-[10px]">
        <a href="#">
          <img
            src={zojaxLogo}
            className="lg:w-[250px] md:w-[200px] sm:w-[150px] w-[100px]"
            alt="Zojax Logo"
          />
        </a>
      </div>
    </>
  );
};

export default ZojaxLogo;
