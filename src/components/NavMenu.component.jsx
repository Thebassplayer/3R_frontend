import React from "react";

import NavButtonsContainer from "./NavButtonsContainer.component";
import HamburguerMenu from "./HamburguerMenu.component";

function NavMenu({ isMenuOpen, setIsMenuOpen, sections }) {
  return (
    <div className="flex align-middle">
      <NavButtonsContainer isMenuOpen={isMenuOpen} sections={sections} />
      <HamburguerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default NavMenu;
