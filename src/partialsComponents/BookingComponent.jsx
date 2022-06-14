import React, { useRef, useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import "../App.css"

function BookingComponent() {
  const dateElem = useRef(null)
  const dateElemTo = useRef(null)
  const inputElem = useRef(null)
  var dropDownElem = useRef(null)

const roomTypes =["Luxury Room", "Mini suite", "Max Suite"]


  const [dropdown, setDropdown] = useState("")

  

  return (
    <form className="max-w-xs sm:flex sm:justify-center">
      <div className="max-w-xs md:ml-50 sm:m-auto my-3 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div className="w-full h-16 text-gray-800 bg-gray-300 border-0 flex items-center align-center">
          <h5 className="text-lg px-3 font-bold">
            70+ rooms are available
          </h5>
        </div>
        <div className=" flex flex-row items-center justify-between px-2 py-2">
          <label className="font-bold">
            FROM:
          </label>
          <input type="date" ref={dateElem} className=" w-48 px-5 py-3 flex align-center bg-gray-300 " placeholder="mm-dd-year" />
        </div>
        <div className=" flex flex-row items-center justify-between px-2 py-2">
          <label className="font-bold">
            TO:
          </label>
          <input type="date" ref={dateElemTo} className=" w-48 px-5 ml-5 py-3 flex align-center bg-gray-300 " placeholder="mm-dd-year" />
        </div>
        <div className=" flex flex-row items-center justify-between px-2 py-2">
          <label className="font-bold">
            ROOM:
          </label>

          <div className=" w-48 h-12 p-0  bg-gray-300 ">
            <div className=" flex  w-48 bg-gray-300 ">
              <input type="text"
                className="w-inherit bg-inherit px-3 py-3 outline-0 text-gray-500"
                name="dropdown"
                ref={inputElem}
                readOnly={true} 
                onFocus={()=>{
                  dropDownElem.current.classList.replace("hidden", "block")
                }}
                // onBlur={()=>dropDownElem.current.classList.replace("block", "hidden")}
                 /><FaAngleDown className=""></FaAngleDown>
            </div>

            <div className="bg-white w-48 absolute md:z-1000 z-50 hidden" ref={dropDownElem}>
              
              {roomTypes.map((item, index) => <div key={index} className="px-3 py-3 hover:bg-gray-200"
              onClick={()=>{
                inputElem.current.value = item
                
              }}
              >{item}</div>)
              }
            </div>
          </div>
          

        </div>
        <div className="flex flex-row items-center justify-center items-center px-2 py-2">
            <button className="w-full text-white d-block block text-white-50 bg-blue-800 border border-0 outline-0 inline-flex justify-center items-center py-4">
              Reserve Room
            </button>
          </div>
      </div>
    </form>
  )
}

export default BookingComponent
