import React from "react";

import _3R_logo from "../assets/logo_web.svg";

function Logo({ isMenuOpen }) {
  return (
    <button
      className={`w-10 sm:w-14 md:w-16 lg:w-20 ${
        isMenuOpen && "opacity-50"
      } transition-opacity duration-500 ease-in-out lg:inline`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={_3R_logo} alt="3R_logo" />
    </button>
  );
}

export default Logo;
