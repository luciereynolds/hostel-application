import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import DisplayItinerary from "./components/DisplayItinerary";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import HostelViewer from "./components/HostelViewer";
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hostels" element={<HostelViewer />} />
            <Route path="/itinerary" element={<DisplayItinerary />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;