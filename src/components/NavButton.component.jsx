import React from "react";

function NavButton({ title }) {
  return (
    <li className="font-Kodchasan font-semibold text-white md:text-3xl">
      <button>{title}</button>
    </li>
  );
}

export default NavButton;
