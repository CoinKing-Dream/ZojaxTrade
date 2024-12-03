import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TradingFunds from "./pages/TradeFunds";
import Header from "./sections/Header";
import IndicateImg from "./assets/indicator.png";
import { useState } from "react";

function App() {
  const [indicateChatbot, setIndicateChatbot] = useState(false);

  return (
    <div className="flex justify-center w-[100%] relative">
      <div className="max-w-[1700px] xl:w-[80%] md:w-[90%] w-[100%] flex flex-col items-center">
        {indicateChatbot && (
          <>
            <div
              className="absolute w-[100vw] h-[100vh] bg-gray-100 opacity-30 z-50"
              onClick={() => setIndicateChatbot(false)}
            >
              <img
                src={IndicateImg}
                className="absolute xl:right-[20px] md:right-[25px] sm:right-[27px] right-[23px] sm:bottom-[100px] bottom-[70px] opacity-100 animate-bounce sm:w-[40px] w-[30px] z-50"
              />
            </div>
          </>
        )}
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home setIndicateChatbot={setIndicateChatbot} />}
          />
          <Route path="/trading_funds" Component={TradingFunds} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
