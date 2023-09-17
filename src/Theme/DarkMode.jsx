import React from "react"; 
import "./DarkMode.css";
// import Sun from "../components/Svg/Sun";
// import Moon from "../components/Svg/Moon"; 
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";

const DarkMode = () => {
    const setDarkMode  = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    }
    const setLightMode  = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    }
    setDarkMode();  
    return (
      <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
        />
        <label className="dark_mode_label" htmlFor="darkmode-toggle">
          {/* <Sun /> */}
          {/* <Moon /> */}
        </label>
      </div>
    );
};

export default DarkMode;