//import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import KvkManagerRoute from "./pages/KvkManagerRoute";
import FarmerRoute from "./pages/FarmerRoute";
import ScientistRoute from "./pages/ScientistRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./images/logo.png";
import { Helmet } from "react-helmet";
import { MoralisProvider } from "react-moralis";

function App() {
  return (
    <>
      <Helmet>
        <title>CropChian</title>
        <link rel="icon" href={logo} type="image/png" sizes="16x16" />
      </Helmet>
      <MoralisProvider initializeOnMount={false}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kvkmanager" element={<KvkManagerRoute />} />
            <Route path="/farmer" element={<FarmerRoute />} />
            <Route path="/scientist" element={<ScientistRoute />} />
          </Routes>
        </Router>
      </MoralisProvider>
    </>
  );
}

export default App;
