import React from "react";
import { Link } from "react-router-dom";

import _3R_logo from "../assets/logo_web.svg";
import NavButton from "./NavButton.component";

const navButtons = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = Component =>
  function HOC() {
    return (
      <div className="h-screen bg-gradient-to-b from-[#3A2CDA] to-black">
        <div className="mx-4 flex justify-between">
          <img className="w-28" src={_3R_logo} alt="3R_logo" />
          <ul className="mr-4 flex gap-16">
            {navButtons.map(button => (
              <NavButton key={button.name} {...button} />
            ))}
          </ul>
        </div>
        <Component />
      </div>
    );
  };

export default Nav;
