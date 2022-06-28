import React from "react";
import {
  FaDeskpro,
  FaRegTrashAlt,
  FaTasks,
  FaFileInvoiceDollar,
  FaCcDinersClub, FaLaughWink, FaShower, FaConciergeBell,
  FaSatelliteDish, FaServicestack, FaLuggageCart,  FaToilet, FaHotTub
} from "react-icons/fa";
const RoomDetails_component = () => {
  return (
    <div className="w-full  h-full  ml-0">
      <div className="w-full flex md:flex-row sm:flex-col md:justify-between">
        <div className="room-details-child room-details-l text-slate-500 mr-3">
          <div className="w-full flex flex-row">
            <div className="icon">
              <FaTasks size={50} />
            </div>
            <p className="text-xs ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              minus, recusandae quae dolores dolorum id beatae? Doloremque at
            </p>
          </div>
          <div className="w-full flex flex-row mt-2">
            <div className="icon">
              <FaLaughWink size={30} />
              
            </div>
            <p className="text-xs ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              minus
            </p>
          </div>
        </div>
        <div className="room-details-child room-details-2 w-full">
            <h2 className="text-bold font-semibold">
                Room Amenities
            </h2>
        </div>
      </div>
      <div className="w-full mt-auto mb-0"></div>
    </div>
  );
};

export default RoomDetails_component;
