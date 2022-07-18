import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";

const Sidebar = () => {
  const [selected, setselected] = useState(0);
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setselected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
