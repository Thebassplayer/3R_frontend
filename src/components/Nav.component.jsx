import React from "react";

import _3R_logo from "../assets/logo_web.svg";
import NavButton from "./NavButton.component";
import Hamburguer from "../assets/hamburguer_menu.svg";

const navButtons = [
  {
    name: "Home",
  },
  {
    name: "Services",
  },
  {
    name: "Contact",
  },
];

const Nav = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-[#3A2CDA] to-black">
      <div className="fixed top-0 left-0 w-full">
        <div id="nav_container" className="flex justify-between p-3 sm:px-6">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              className="w-12 sm:w-20 md:w-28"
              src={_3R_logo}
              alt="3R_logo"
            />
          </button>
          <div className="flex items-center">
            <img src={Hamburguer} className="sm:w-12 md:hidden" />
            <ul className="mr-4 hidden gap-16 md:flex">
              {navButtons.map(button => (
                <NavButton key={button.name} {...button} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Nav;
