import React from "react";

function NavButton({ title, sectionRef }) {
  const scrollToSection = section => {
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li className="font-Kodchasan text-lg font-semibold text-white md:text-3xl">
      <button onClick={() => scrollToSection(sectionRef)}>{title}</button>
    </li>
  );
}

export default NavButton;
