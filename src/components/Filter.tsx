import { useState } from "react";

const FilterMenu = () => {
  const [location, setLocation] = useState("Santa Barbara, CA");
  const todayDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="search-params">
      <form>
        <div>
          <label htmlFor="location">
            Location
            <input
              id="location"
              value={location}
              placeholder="Location"
              // Disabled since we're currently only getting data for one city
              // onChange={(e) => setLocation(e.target.value)}
              readOnly={true}
            />
          </label>
          <button disabled={true}>Submit</button>
        </div>

        <div>
          <label htmlFor="date">
            Date{" "}
            <input
              id="date"
              type="date"
              name="date"
              value={todayDate}
              readOnly={true}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lengths"> Movie Length </label>
          <input type="range" id="range" name="range" min="1" max="1000" />
        </div>
        <div className="select-container">
          <label htmlFor="theater-movie-view">
            <select id="theater-movie-view">
              <option value="Theater">Theaters</option>
              <option value="Movie">Movies</option>
            </select>
          </label>
        </div>
        <div className="select-container">
          <label htmlFor="list-map-view">
            <select id="list-map-view">
              <option value="List">List View</option>
              <option value="Map">Map View</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};

export default FilterMenu;
