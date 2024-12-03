import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TradingFunds from "./pages/TradeFunds";
import Header from "./sections/Header";

function App() {
  return (
    <div className="flex justify-center w-[100%] relative">
      <div className="max-w-[1700px] xl:w-[80%] md:w-[90%] w-[100%] flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/trading_funds" Component={TradingFunds} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
