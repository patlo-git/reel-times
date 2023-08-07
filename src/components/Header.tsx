import FilterMenu from "./Filter";

const Header = () => {
  return (
    <div id="header-container">
      <div id="header-wrapper">
        <div id="header">
          <a href="#home">ReelTimes</a>
          <FilterMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
