import FilterMenu from "./Filter";

interface HeaderProps {
  toggleView: () => void;
  viewType: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleView, viewType }) => {
  return (
    <div id="header-container">
      <div id="header-wrapper">
        <div id="header">
          <section className="view-toggle-base">
            <button
              className={
                viewType === true
                  ? "theater-view view-toggle"
                  : "movie-view view-toggle"
              }
              aria-pressed={false}
              onClick={toggleView}
            >
              {viewType ? "View Movies" : "View Theaters"}
            </button>
          </section>
          <a href="#home">ReelTimes</a>
          <FilterMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
