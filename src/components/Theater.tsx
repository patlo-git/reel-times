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
  const movieIds: string[] = [];

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

    movieIds.push(`${rest.tmsId} ` + rest.title);
    console.log(movieIds);
  });

  console.log("moviesByTheater: ", moviesByTheater);

  return (
    <div className="theater-container">
      {Object.entries(moviesByTheater).map(([theaterId, movies]) => {
        const theaterName = movies[0].showtimes[0].theatre.name;

        return (
          <div key={theaterId}>
            <div className="theater-name-wrapper">
              <h2 className="theater-name">{theaterName}</h2>
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
                      releaseYear,
                      officialUrl,
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
                        releaseYear={releaseYear}
                        officialUrl={officialUrl}
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
