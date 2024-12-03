const fundCoins = [
  {
    name: "BTC",
    order: "Long",
    balance: "20%",
  },
  {
    name: "BONK",
    order: "Long",
    balance: "10%",
  },
  {
    name: "DOGE",
    order: "Long",
    balance: "10%",
  },
  {
    name: "POPCAT",
    order: "Long",
    balance: "10%",
  },
  {
    name: "ETH",
    order: "Short",
    balance: "20%",
  },
  {
    name: "DOGS",
    order: "Short",
    balance: "10%",
  },
  {
    name: "FLOKI",
    order: "Short",
    balance: "10%",
  },
  {
    name: "SHIBA",
    order: "Short",
    balance: "10%",
  },
];

const FundCards = ({ id, link, fundBtn, fundLink }) => {
  return (
    <>
      <div id={id}>
        <div className="w-full flex flex-col justify-start items-center">
          <img src={link} className="rounded-t-lg xl:w-[450px] xl:h-[480px] lg:w-[430px] lg:h-[430px] md:w-[330px] md:h-[380px] w-[60vw] h-[60vw] max-[500px]:w-[85vw] max-[500px]:h-[85vw]"/>
          <div className="bg-sky-400 xl:w-[450px] lg:w-[430px] md:w-[330px] w-[60vw] max-[500px]:w-[85vw]">
            <div className="flex flex-row justify-around items-center w-full border-b-2 bg-blue-700">
              <div className="text-center font-bold w-[25%]">Coin</div>
              <div className="text-center font-bold w-[30%]">Long/Short</div>
              <div className="text-center font-bold w-[45%]">Allocation,%</div>
            </div>
            <div className="flex flex-col justify-around items-center w-full divide-y">
              {fundCoins.map((item, index) => {
                return (
                  <div
                    key={item.name}
                    className="flex flex-row justify-around items-center w-full"
                  >
                    <div className="text-center w-[25%]">{item.name}</div>
                    <div className={`text-center w-[30%] ${index<4?"text-teal-800":"text-rose-800"}`}>{item.order}</div>
                    <div className="text-center w-[45%]">{item.balance}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="xl:w-[450px] bg-cyan-600 flex justify-center items-center text-[20px] font-bold py-3 rounded-b-lg">
          <a href={fundLink}>{fundBtn}</a>
        </div>
      </div>
    </>
  );
};

export default FundCards;
