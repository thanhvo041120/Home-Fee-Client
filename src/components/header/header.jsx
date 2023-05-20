import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { TopAppNavBarComponent } from "../navigation";
import "./style.css";
const Header = () => {
  return (
    <div className="header-containter">
      <div className="header-row">
        <div className="header-logo">
          <GiReceiveMoney className="app-logo"/>
        </div>
        <div className="header-app-name">
          <p className="header-app-name-text">HFtool</p>
        </div>
        <div className="header-navigation"> 
          <TopAppNavBarComponent/>
        </div>
      </div>
    </div>
  );
};

export default Header;
