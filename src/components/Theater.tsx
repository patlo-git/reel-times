import React from "react";
import Movie from "./Movie";
import { MovieProps, TheaterProps } from "../types";

interface Props {
  movies: TheaterProps[];
}

const Theater: React.FC<Props> = ({ movies }) => {
  const moviesSubset: MovieProps[] = movies.map(
    ({ tmsId, title, genres, ratings, runTime, showtimes }) => ({
      tmsId,
      title,
      genres,
      ratings,
      runTime,
      showtimes,
    })
  );

  console.log("moviesSubset: ", moviesSubset);
  return (
    <div className="theater-container">
      <div>
        <div className="theater-name-wrapper">
          <h1>Theater</h1>
        </div>
        <div className="movies-container">
          <div className="movies-wrapper">
            <>
              {moviesSubset.map((movie) => {
                const { tmsId, title, genres, ratings, runTime, showtimes } =
                  movie;

                return (
                  <Movie
                    key={tmsId}
                    tmsId={tmsId}
                    title={title}
                    genres={genres}
                    ratings={ratings}
                    runTime={runTime}
                    showtimes={showtimes}
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
