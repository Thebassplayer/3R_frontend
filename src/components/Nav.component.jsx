import React, { Children, useState } from "react";

import NavButton from "./NavButton.component";
import Logo from "./Logo.component";
import HamburguerMenu from "./HamburguerMenu.component";
import NavButtonsContainer from "./NavButtonsContainer.component";

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const childrenArray = Children.toArray(children);

  console.log(childrenArray);

  return (
    <div className="bg-gradient-to-b from-[#3A2CDA] to-black">
      <div
        id="nav_container"
        className={`fixed top-0 left-0 flex w-full items-center justify-between p-5 backdrop-blur-sm sm:px-6 lg:p-2`}
      >
        <Logo isOpen={isOpen} />

        <ul
          className={`items-center ${
            !isOpen && "hidden opacity-0"
          } flex gap-10 transition-opacity duration-500 lg:flex lg:justify-end lg:opacity-100`}
        >
          {Children.map(children, child => {
            const title = child.props.id;
            console.log(title);
            return <NavButton key={title} title={title} />;
          })}
        </ul>

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
