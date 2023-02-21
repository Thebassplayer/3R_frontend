import React from "react";

function NavButton({ name }) {
  return (
    <li className="flex items-center justify-center font-Kodchasan text-3xl font-semibold text-white">
      <button>{name}</button>
    </li>
  );
}

export default NavButton;
