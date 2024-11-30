import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center w-[100%]">
      <div className="max-w-[1700px] md:w-[90%] w-[100%]">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
