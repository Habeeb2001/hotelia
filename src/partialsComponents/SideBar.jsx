import React from 'react'
import {FaFire} from "react-icons/fa"
function SideBar() {
  return (
    <div className="fixed py top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">


      <a href="#">

      </a>



      <SideBarIcons icon={<FaFire side="25"/> } />

    </div>
  )
}
const SideBarIcons = ({ icon }) => {
  return (
    <div className="sideBar-icon">
        {icon}
    </div>
  )

}
export default SideBar
