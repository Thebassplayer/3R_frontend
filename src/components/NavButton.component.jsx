import React from "react";
import { Link } from "react-router-dom";

function NavButton({ path, name }) {
  return (
    <li className="flex items-center justify-center font-Kodchasan text-3xl font-semibold text-white">
      <Link to={path}>{name}</Link>
    </li>
  );
}

export default NavButton;
