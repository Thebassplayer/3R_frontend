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
      <div>
        <div className="flex justify-between border-2 border-red-700">
          <img className="w-24" src={_3R_logo} alt="3R_logo" />
          <ul className="mr-4 flex gap-4">
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
