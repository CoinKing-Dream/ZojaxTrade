const fundCoins = [
  {
    name: "BTC",
    order: "LONG",
    balance: "20%",
  },
  {
    name: "BONK",
    order: "LONG",
    balance: "10%",
  },
  {
    name: "DOGE",
    order: "LONG",
    balance: "10%",
  },
  {
    name: "POPCAT",
    order: "LONG",
    balance: "10%",
  },
  {
    name: "ETH",
    order: "SHORT",
    balance: "20%",
  },
  {
    name: "DOGS",
    order: "SHORT",
    balance: "10%",
  },
  {
    name: "FLOKI",
    order: "SHORT",
    balance: "10%",
  },
  {
    name: "SHIBA",
    order: "SHORT",
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
              <div className="text-center font-medium w-[25%]">Coin</div>
              <div className="text-center font-medium w-[30%]">LONG/SHORT</div>
              <div className="text-center font-medium w-[45%]">Allocation,%</div>
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
