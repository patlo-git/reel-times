import React from "react";
import Movie from "./Movie";
import { MovieProps, TheaterProps } from "../types";
import YoutubeEmbed from "./YoutubeEmbed";

interface Props {
  movies: TheaterProps[];
}

interface MoviesByTheater {
  [theaterId: string]: MovieProps[];
}

const MovieView: React.FC<Props> = ({ movies }) => {
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

  const movieId = movies.forEach((movie) => movie.tmsId);

  return (
    <div className="now-showing-container">
      <div className="now-showing-wrapper">
        <h2 className="now-showing">Now Showing</h2>
      </div>
      <div className="now-showing-movies-container">
        <div className="now-showing-movies-wrapper">
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
        <div className="now-showing-trailers">
          <YoutubeEmbed embedId="pBk4NYhWNMM" />
        </div>
      </div>
    </div>
  );
};

export default MovieView;
