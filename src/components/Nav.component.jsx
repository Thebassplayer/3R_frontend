import React, { Children, useState } from "react";

import Logo from "./Logo.component";
import NavMenu from "./NavMenu.component";

const Nav = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionsArray = Children.toArray(children);

  return (
    <div className="bg-gradient-to-b from-[#3A2CDA] to-black">
      <div
        className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between p-5 backdrop-blur-sm sm:px-6 lg:p-2`}
      >
        <Logo isMenuOpen={isMenuOpen} />

        <NavMenu
          isMenuOpen={isMenuOpen}
          sections={sectionsArray}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <div id="section-container" className="snap-y snap-mandatory">
        {sectionsArray.map((child, index) => {
          return (
            <div
              key={`section-${index}-${child.props.id}`}
              id={child.props.id}
              className="h-screen snap-center pt-24 sm:pt-20 md:pt-24"
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
