import React from "react";
import { FeeFormComponent } from "../../components/forms";
import { HeaderComponent } from "../../components/header";
import { CarouselComponent } from "../../components/slider";
import "./style.css";
const UserHomePage = () => {
  return (
    <div className="page-container">
      <div className="page-header-container">
        <HeaderComponent />
      </div>
      <div className="page-slide-show-container">
        <CarouselComponent />
      </div>
      <div className="">
        <FeeFormComponent />
      </div>
    </div>
  );
};

export default UserHomePage;
