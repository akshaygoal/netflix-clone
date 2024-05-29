import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MovieFS from "./Components/MovieFS/MovieFS";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/MovieFS" element={<MovieFS />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
