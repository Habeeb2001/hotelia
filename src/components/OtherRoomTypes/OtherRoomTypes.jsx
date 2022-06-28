import React from "react";
import Slideshow_component from "../../partialsComponents/Slideshow_component";
import { FaFire, FaEye } from "react-icons/fa";
import { roomDetails } from "../../assets/imports";

const OtherRoomTypes = (props) => {
  return (
    <div className="room-cards2 ">
      {roomDetails
        .filter((item, index) => index > 1 && index < 5)
        .map((room, idx) => {
          return (
            <div className="room-card2" key={idx}>
              <Slideshow_component roomImgs={room.images} />
              <div className="room-card-body">
                <div className="room-child">
                  <h3 className="font-sm text-gray-500">{room.name}</h3>
                  <p className="text-xs text-gray-500">
                    {room.about}
                  </p>
                </div>
                <div className="room-child2">
                <a href="#" className="text-white block my-5 mx-4 text-xl ">
                  <FaEye size={30}/>
                </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default OtherRoomTypes;
