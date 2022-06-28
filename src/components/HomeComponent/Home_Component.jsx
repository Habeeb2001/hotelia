import React from "react";
import BestRooms from "../BestRooms/BestRooms";
import OtherRoomTypes from "../OtherRoomTypes/OtherRoomTypes";
import OtherServices from "../OtherServices/otherServices";

const HomeComponent = () => {
  return (
    <div className="w-full h-full">
      <div className="card-parent">
        <div className="text-lg text-center text-slate-400 capitalize my-5 font-bold block mt-5">
          Room classes
        </div>
        <BestRooms />
      </div>
      <div className="w-full h-full bg-gray-200 pt-4">
        <div className="text-lg text-center text-slate-400 capitalize my-5  font-bold block">
          Other room types
        </div>
        <OtherRoomTypes />
      </div>
      <div className="w-full h-full bg-white-500">
        <div className="text-lg text-center text-slate-400 capitalize my-5 font-bold block">
          Our Event centers
        </div>
        <OtherServices />
      </div>
    </div>
  );
};

export default HomeComponent;
