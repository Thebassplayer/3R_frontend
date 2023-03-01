import React from "react";

import Hamburguer from "../assets/hamburguer_menu.svg";

function HamburguerMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`lg:hidden ${
        isMenuOpen && "opacity-50"
      } flex gap-10 transition-opacity duration-500`}
    >
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <img src={Hamburguer} className={"w-12 min-w-max sm:w-12 md:w-12"} />
      </button>
    </div>
  );
}

export default HamburguerMenu;
