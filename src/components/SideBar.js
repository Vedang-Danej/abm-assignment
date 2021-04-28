import React, { useState } from "react";
import logo from "../icons/logo.png";
import mysite from "../icons/mysite.png";
import MenuItem from "../components/MenuItem";
import projects from "../icons/projects.png";
import business from "../icons/business.png";
import security from "../icons/security.png";
const SideBar = () => {
  const [menu, setMenu] = useState(3);
  const changeMenu = () => {
    console.log("changeMenu");
  };
  return (
    <div className="w3-sidebar w3-bar-block sidebar">
      <div className="w3-bar-item sidebar-menu">
        <div>
          <img className="logo" src={logo} alt="logo" />
          <img src={mysite} alt="mysite" />
        </div>
      </div>
      <div
        className={`${
          menu === 1 ? "menu-active" : null
        } w3-button sidebar-menu menu-item`}
        onClick={() => setMenu(1)}
      >
        <MenuItem url={projects} name="Projects" />
      </div>
      <div
        className={`${
          menu === 2 ? "menu-active" : null
        } w3-button sidebar-menu menu-item`}
        onClick={() => setMenu(2)}
      >
        <MenuItem url={business} name="Organisation Profile" />
      </div>
      <div
        className={`${
          menu === 3 ? "menu-active" : null
        } w3-button sidebar-menu menu-item`}
        onClick={() => setMenu(3)}
      >
        <MenuItem url={security} name="Access Control" />
      </div>
    </div>
  );
};

export default SideBar;
