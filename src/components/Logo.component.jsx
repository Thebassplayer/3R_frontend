import React from "react";

import _3R_logo from "../assets/logo_web.svg";

function Logo({ isOpen }) {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img
        className={`w-12 sm:w-20 md:w-28 ${isOpen && "hidden"}`}
        src={_3R_logo}
        alt="3R_logo"
      />
    </button>
  );
}

export default Logo;
