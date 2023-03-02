import React from "react";

function NavButton({ title }) {
  return (
    <li className="font-Kodchasan text-xl font-semibold text-white md:text-3xl">
      <a href={`#${title}`}>{title}</a>
    </li>
  );
}

export default NavButton;
