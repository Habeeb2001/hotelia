import React from "react";
import { getImage } from "../../customMethods/getImage";
import { roomDetails } from "../../assets/imports";
import "../../assets/css/roomDetails.css";
import RoomDetails_component from "../../partialsComponents/RoomDetails_component";

const AboutRoom_Component = () => {
  const roomImage = roomDetails[0];
  return (
    <div className="w-full mx-2 h-full">
      <div className="details-container">

        <div className="room-imgs">

          <div className="room-img-1">
            <img src={getImage(roomImage.images[0])} alt="roomImage" />
          </div>
          <h3 className="text-sm font-semibold ml-3">
            Room overviews
          </h3>
          <div className="room-imgs-others">
            <img
              src={getImage(roomImage.images[1])}
              className="other-img"
              alt="roomImage"
            />
            <img
              src={getImage(roomImage.images[0])}
              className="other-img"
              alt="roomImage"
            />
            <img
              src={getImage(roomImage.images[2])}
              className="other-img"
              alt="roomImage"
            />
          </div>
        </div>

        <div className="room-details">
          {/* room details */}
          <h1 className="capitalize font-bold">
           Queen's suite
          </h1>
          <RoomDetails_component />
        </div>
      </div>
    </div>
  );
};

export default AboutRoom_Component;
