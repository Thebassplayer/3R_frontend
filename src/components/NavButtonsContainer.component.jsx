import NavButton from "./NavButton.component";

function NavButtonsContainer({ sections, isMenuOpen, sectionsRef }) {
  return (
    <ul
      className={`items-center ${
        isMenuOpen ? "flex" : "hidden"
      } mr-2 gap-5 lg:flex lg:justify-end`}
    >
      {sections.map(section => {
        const sectionTitle = section.props.id;
        const sectionRef = sectionsRef.current[sectionTitle];
        return (
          <NavButton
            key={sectionTitle}
            title={sectionTitle}
            sectionRef={sectionRef}
          />
        );
      })}
    </ul>
  );
}

export default NavButtonsContainer;
