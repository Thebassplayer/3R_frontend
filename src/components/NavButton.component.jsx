import React from "react";
import { Link } from "react-router-dom";

function NavButton({ path, name }) {
  return (
    <li className="flex items-center justify-center text-4xl font-semibold">
      <Link to={path}>{name}</Link>
    </li>
  );
}

export default NavButton;
