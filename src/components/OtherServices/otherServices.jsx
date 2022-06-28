import React from "react";
import { roomDetails } from "../../assets/imports";
import Slideshow_component from "../../partialsComponents/Slideshow_component";
import { FaBook, FaAddressBook, FaAlipay, FaCreditCard, FaChromecast } from "react-icons/fa";

const OtherServices = () => {
  return (
    <div className="room-cards3 ">
      {roomDetails
        .filter((item, idx) => idx > 4)
        .map((room, idx) => {
          return (
            <div className="room-card3" key={idx} >
              <div className="first-child" style={{
                order: idx > 0 && idx <2 ? 1: 0
              }}>
                <Slideshow_component
                  roomImgs={room.images}
                  className="w-full h-full"
                />
              </div>

              <div className="room-card-body">
                <h3 className="text-md font-bold text-gray-800 uppercase my-2">
                  <a href="#">{room.name}</a>
                </h3>
                <a
                  href="#"
                  className="text-white bg-orange-500 shadow-lg shadow-orange-200 text-md p-1 px-2 rounded-2xl"
                >
                  Details
                </a>

                <ul className="list-none">
                  <li className="flex items-center mt-3 text-slate-500">
                    <div className="text-xl text-slate-400">
                      {/* <FaBook /> */}
                      <FaCreditCard/>
                    </div>
                    <div className="text-md ml-3 capitalize">N{room.price}</div>
                  </li>
                  <li className="flex items-center mt-3 text-slate-500">
                    <div className="text-xl text-slate-400">
                      {/* <FaBook /> */}
                      <FaChromecast/>
                    </div>
                    <div className="text-md ml-3 capitalize">{room.about}</div>
                  </li>
                  <li className="flex items-center ">
                    
                    <button className="px-2 py-1 bg-blue-700 border-0 rounded-2xl shadow-lg text-slate-200 shadow-blue-300  text-center mt-3 ">Reserve Center</button>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OtherServices;
