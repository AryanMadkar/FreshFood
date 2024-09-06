import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Midend from "./midend/Midend";

function App() {
  const [count, setCount] = useState(0);
  const [openauth, setOpenauth] = useState(false);

  const getid = ()=>{
    
  }

  return (
    <BrowserRouter>
      <Navbar openauth={openauth} setOpenauth={setOpenauth} />
      <div className="w-full h-full relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopbag" element={<Midend />} />
        </Routes>
        {openauth && (
          <Authentication openauth={openauth} setOpenauth={setOpenauth} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
