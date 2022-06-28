// import { Route, Routes,  } from 'react-router';
import "./App.css";
import "./index.css";

import HeadersComponent from "./partialsComponents/HeadersComponent";

import Slideshow_component from "./partialsComponents/Slideshow_component";
import { Footer_Component } from "./partialsComponents/Footer_Component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent/Home_Component";
import AboutRoom_Component from "./components/AboutRoomComponent/AboutRoom_Component";

function App() {
  return (
    <div className="w-full h-full ">
      <HeadersComponent />
      <div className="main-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomeComponent />} />
            <Route path="/room/:roomid" element={<AboutRoom_Component />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="footer">
        <Footer_Component />
      </div>
    </div>
  );
}

export default App;
