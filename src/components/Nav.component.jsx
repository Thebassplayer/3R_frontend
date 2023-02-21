import React, { Children, useState } from "react";

import NavButton from "./NavButton.component";
import Logo from "./Logo.component";
import HamburguerMenu from "./HamburguerMenu.component";

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const childrenArray = Children.toArray(children);

  console.log(childrenArray);

  return (
    <div className="bg-gradient-to-b from-[#3A2CDA] to-black">
      <div className="fixed top-0 left-0 w-full">
        <div
          id="nav_container"
          className={`flex w-full items-center justify-between p-3 backdrop-blur-sm sm:px-6`}
        >
          <Logo isOpen={isOpen} />

          <ul
            className={`items-center ${
              !isOpen ? "hidden" : "flex"
            } gap-10 lg:flex lg:justify-end`}
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
      {Children.map(children, child => {
        return <div className="h-screen pt-16 sm:pt-20 md:pt-24">{child}</div>;
      })}
    </div>
  );
};

export default Nav;
