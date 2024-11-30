import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex justify-center w-[100%] relative">
      <div className="max-w-[1700px] xl:w-[80%] md:w-[90%] w-[100%]">
        <Home />
      </div>
    </div>
  );
}

export default App;
