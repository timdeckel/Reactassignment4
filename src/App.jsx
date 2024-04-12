import { useState } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Mammals from "./pages/Mammals";
import Reptiles from "./pages/Reptiles";
import Birds from "./pages/Birds";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home title="Welcome Page" />} />
          <Route path="/Mammals" element={<Mammals title="Mammals" />} />
          <Route path="/Reptiles" element={<Reptiles title="Reptiles" />} />
          <Route path="/Birds" element={<Birds title="Birds" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
