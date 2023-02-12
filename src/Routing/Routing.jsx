import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Header from "../Share_module/Header/Header";
import Footer from "../Share_module/Footer/Footer";
import Details from "../Components/Details/Details";

export default function Routing() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    // mode === 'light' ? setMode('dark') : setMode('light');
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#051834";
      document.body.style.color = 'white';
      <Details theme={mode}/>
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
    }
  };

  return (
    <div>
      <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details title="Textbox" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
