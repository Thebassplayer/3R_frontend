import React, { Children } from "react";

import NavButton from "./NavButton.component";

function NavButtonsContainer({ sections, isOpen }) {
  console.log("sections: ", sections);
  return (
    <ul
      className={`items-center ${
        !isOpen ? "hidden" : "flex"
      } gap-10 lg:flex lg:justify-end`}
    >
      {sections.map(section => {
        const sectionTitle = section.props.id;
        return <NavButton key={sectionTitle} title={sectionTitle} />;
      })}
    </ul>
  );
}

export default NavButtonsContainer;
