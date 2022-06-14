// import { Route, Routes,  } from 'react-router';
import './App.css';
import BestRooms from './components/BestRooms';
import  OtherRoomTypes  from './components/OtherRoomTypes';
import OtherServices from './components/otherServices';
import HeadersComponent from './partialsComponents/HeadersComponent';
// import { roomImgs } from "./assets/images/hotelia.jpg"
import Slideshow_component from './partialsComponents/Slideshow_component';

function App() {
  
  return (
    <div className="w-full h-full ">
      <HeadersComponent />
      <div className="main-body">
      <BestRooms />
      <OtherRoomTypes/>
      <OtherServices/>
      </div>
      
      

    </div>
  );
}

export default App;
