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
      </form>
    </div>
  );
};

export default FilterMenu;
