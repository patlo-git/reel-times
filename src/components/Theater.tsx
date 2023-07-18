import React from "react";
import Movie from "./Movie";
import { MovieProps, TheaterProps } from "../types";

interface Props {
  movies: TheaterProps[];
}

interface MoviesByTheater {
  [theaterId: string]: MovieProps[];
}

const Theater: React.FC<Props> = ({ movies }) => {
  const moviesByTheater: MoviesByTheater = {};

  movies.forEach(({ showtimes, ...rest }) => {
    showtimes.forEach((showtime) => {
      const theaterId = showtime.theatre.id;
      const { tmsId, ...movieData } = rest;
      const existingMovie = moviesByTheater[theaterId]?.find(
        (movie) => movie.tmsId === tmsId
      );

      if (existingMovie) {
        existingMovie.showtimes.push(showtime);
      } else {
        const anyExistingMoviesAtTheater = moviesByTheater[theaterId];

        const newMovie = {
          tmsId,
          ...movieData,
          showtimes: [showtime],
        };

        moviesByTheater[theaterId] = [
          ...(anyExistingMoviesAtTheater || []),
          newMovie,
        ];
      }
    });
  });

  return (
    <div className="theater-container">
      {Object.entries(moviesByTheater).map(([theaterId, movies]) => {
        const theaterName = movies[0].showtimes[0].theatre.name;

        return (
          <div key={theaterId}>
            <div className="theater-name-wrapper">
              <h1>{theaterName}</h1>
            </div>
            <div className="movies-container">
              <div className="movies-wrapper">
                <>
                  {movies.map((movie) => {
                    const {
                      tmsId,
                      title,
                      genres,
                      ratings,
                      runTime,
                      showtimes,
                    } = movie;

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
        );
      })}
    </div>
  );
};

export default Theater;
