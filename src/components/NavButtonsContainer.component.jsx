import NavButton from "./NavButton.component";

function NavButtonsContainer({ sections, isMenuOpen }) {
  return (
    <ul
      className={`items-center ${
        isMenuOpen ? "flex" : "hidden"
      } mr-2 gap-5 lg:flex lg:justify-end`}
    >
      {sections.map(section => {
        const sectionTitle = section.props.id;
        return <NavButton key={sectionTitle} title={sectionTitle} />;
      })}
    </ul>
  );
}

export default NavButtonsContainer;
