import React, { Children, useState, useMemo } from "react";

import Logo from "./Logo.component";
import HamburguerMenu from "./HamburguerMenu.component";
import NavButtonsContainer from "./NavButtonsContainer.component";

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionsArray = Children.toArray(children);

  return (
    <div className="bg-gradient-to-b from-[#3A2CDA] to-black">
      <div
        id="nav_container"
        className={`fixed top-0 left-0 flex w-full items-center justify-between p-5 backdrop-blur-sm sm:px-6 lg:p-2`}
      >
        <Logo isOpen={isOpen} />

        <NavButtonsContainer isOpen={isOpen} sections={sectionsArray} />

        <HamburguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {Children.map(children, child => {
        return (
          <div id={child.props.id} className="h-screen pt-24 sm:pt-20 md:pt-24">
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
