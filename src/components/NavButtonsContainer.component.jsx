import React from "react";

function NavButtonsContainer() {
  return (
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
  );
}

export default NavButtonsContainer;
