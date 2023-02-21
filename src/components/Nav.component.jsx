import React, { Children, useState } from "react";

import NavButton from "./NavButton.component";
import Logo from "./Logo.component";
import HamburguerMenu from "./HamburguerMenu.component";
import { set } from "sanity";

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#3A2CDA] to-black">
      <div className="fixed top-0 left-0 w-full">
        <div
          id="nav_container"
          className="flex justify-between p-3 backdrop-blur-sm sm:px-6"
        >
          <Logo isOpen={isOpen} />
          <div className="flex items-center">
            <ul
              className={`mr-4 ${
                !isOpen ? "hidden" : "flex"
              } w-full justify-between md:flex md:gap-16`}
            >
              {Children.map(children, child => {
                const title = child.props.id;
                console.log(title);
                return <NavButton key={title} title={title} />;
              })}
            </ul>
            <HamburguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
      {Children.map(children, child => {
        return child;
      })}
    </div>
  );
};

export default Nav;
