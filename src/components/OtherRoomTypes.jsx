import React from "react";
import Slideshow_component from "../partialsComponents/Slideshow_component";
import { FaFire, FaEye } from "react-icons/fa";
import { roomDetails } from "../assets/imports";
import Slideshow_component2 from "../partialsComponents/Slideshow_component2";
const roomRoomTypes = (props) => {
  return (
    <div className="room-cards2 ">
      {roomDetails
        .filter((item, index) => index > 1)
        .map((room, idx) => {
          return (
            <div className="room-card2" key={idx}>
              <Slideshow_component2 roomImgs={room.images} />
              <div className="room-card-body">
                <div className="room-child">
                  <h3 className="font-sm text-gray-500">{room.name}</h3>
                  <p className="text-xs text-gray-500">
                    {room.about}
                  </p>
                </div>
                <div className="room-child2">
                  <FaEye />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default roomRoomTypes;
