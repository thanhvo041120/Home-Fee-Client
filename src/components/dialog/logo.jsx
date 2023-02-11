import React from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillWarning,
} from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";

const Logo = ({ type, color }) => {
  const RenderLogo = () => {
    switch (type) {
      case "error":
        return (
          <AiFillCloseCircle className="popup-logo" style={{ color: color }} />
        );
      case "info":
        return (
          <HiInformationCircle
            className="popup-logo"
            style={{ color: color }}
          />
        );
      case "warning":
        return (
          <AiFillWarning className="popup-logo" style={{ color: color }} />
        );
      case "success":
        return (
          <AiFillCheckCircle className="popup-logo" style={{ color: color }} />
        );
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <RenderLogo />
    </React.Fragment>
  );
};

export default Logo;
