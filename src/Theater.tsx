import Movie from "./Movie";

const Theater = () => {
  return (
    <div className="theater-wrapper">
      <div>
        <div className="title-container">
          <h1>Theater</h1>
        </div>
        <div className="movies-wrapper">
          <div className="movies-container">
            <Movie
              title="Movie 0"
              rating="PG-13"
              length="135 minutes"
              genre="action"
              projection="imax"
              audio="imax digital"
              review="89% RT"
            />
            <Movie
              title="Movie 1"
              rating="R"
              length="123 minutes"
              genre="drama"
              projection="70mm"
              audio="thx"
              review="98% RT"
            />
            <Movie
              title="Movie 2"
              rating="PG"
              length="112 minutes"
              genre="Documentary"
              projection="4k"
              audio="dts"
              review="92% RT"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theater;
