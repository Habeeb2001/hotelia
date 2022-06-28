import React from "react";
import { useRef, useEffect } from "react";
import Slideshow_component from "../../partialsComponents/Slideshow_component";
import { FaFire, FaEye } from "react-icons/fa";
import { roomDetails } from "../../assets/imports";

function BestRooms() {
  
  useEffect(() => {}, []);
  return (
    <div className="room-cards ">
      {roomDetails.slice(0, 2).map((room, idx) => {
        return (
          <div className="room-card" key={idx}>
            <Slideshow_component roomImgs={room.images} />
            <div className="room-card-body">
              <div className="room-child">
                <h3 className="font-sm text-gray-500">{room.name}</h3>
                <p className="text-sm text-gray-500">{room.about}</p>
              </div>
              <div className="room-child2">
                <a href={`/room/:${room.name}`} className="text-white vertical-center  block text-xl">
                  <FaEye size={30}/>
                </a >
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BestRooms;
