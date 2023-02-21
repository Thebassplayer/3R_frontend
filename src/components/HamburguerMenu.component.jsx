import React from "react";

import Hamburguer from "../assets/hamburguer_menu.svg";

function HamburguerMenu({ isOpen, setIsOpen }) {
  return (
    <div className={`lg:hidden`}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src={Hamburguer} className={"w-7 min-w-max sm:w-12 md:w-14"} />
      </button>
    </div>
  );
}

export default HamburguerMenu;
