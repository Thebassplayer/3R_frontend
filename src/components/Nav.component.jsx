import React from "react";
import { Link } from "react-router-dom";

const Nav = Component =>
  function HOC() {
    return (
      <div>
        <div>
          <ul style={{ display: "flex", gap: "1rem" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Component />
      </div>
    );
  };

export default Nav;
