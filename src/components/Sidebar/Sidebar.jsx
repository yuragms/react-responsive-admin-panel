import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setselected] = useState(0);
  const [expended, setexpended] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expended ? { left: "60%" } : { left: "5%" }}
        onClick={() => setexpended(!expended)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expended}` : ""}
      >
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
      </motion.div>
    </>
  );
};

export default Sidebar;
