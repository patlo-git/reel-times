import Movie from "./Movie";
import { movies } from "../mocks/MovieDB";

const Theater = () => {
  return (
    <div className="theater-wrapper">
      <div>
        <div className="title-container">
          <h1>Theater</h1>
        </div>
        <div className="movies-wrapper">
          <div className="movies-container">
            <>
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    title={movie.title}
                    rating={movie.rating}
                    length={movie.length}
                    genre={movie.genre}
                    projection={movie.projection}
                    audio={movie.audio}
                    review={movie.review}
                  />
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theater;
