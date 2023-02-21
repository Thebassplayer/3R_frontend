import React from "react";

import Hamburguer from "../assets/hamburguer_menu.svg";

function HamburguerMenu({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <img src={Hamburguer} className={`sm:w-12 md:hidden`} />
    </button>
  );
}

export default HamburguerMenu;
