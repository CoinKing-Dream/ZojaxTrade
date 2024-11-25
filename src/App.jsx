import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
