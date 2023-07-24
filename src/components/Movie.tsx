import React from "react";
import { MovieTimesButtons } from "./MovieTimes";
import { MovieProps } from "../types";
import { movieList } from "../mocks/TMDBData";

const Movie: React.FC<MovieProps> = (props) => {
  const { tmsId, title, genres, ratings, runTime, showtimes, releaseYear } =
    props;

  const firstTwoGenres = genres?.slice(0, 2).join(", ");
  const convertTime = runTime.slice(2);

  const amenities = showtimes.map((showtime, index) => {
    if (showtime.quals) {
      return (
        <span key={tmsId + index}>
          {showtime.quals?.split("|").join(" | ")} |
        </span>
      );
    } else {
      return <span key={tmsId + index}></span>;
    }
  });

  const amenity = amenities[0];

  const getArt = () => {
    const movie = movieList.find((movie) => movie.id === tmsId);

    return movie && movie.url
      ? movie.url
      : "https://image.tmdb.org/t/p/w300/5j1JT3Ut7k68Wy2dKGzgP0eAw9v.jpg";
  };

  const moviePoster = getArt();

  return (
    <div className="movie">
      <div className="movie-info">
        <h2>{title}</h2>
        <h3 className="amenities">
          {(ratings ?? []).length > 0 ? (
            (ratings ?? []).map((ratingItem, index) => (
              <span key={tmsId + index}>{ratingItem.code}</span>
            ))
          ) : (
            <span>NR</span>
          )}{" "}
          | {convertTime} | {releaseYear} | {firstTwoGenres} | {amenity}{" "}
          {"review"}
        </h3>
        <div className="times-wrapper">
          <>
            {(showtimes ?? []).map((times, index) => (
              <MovieTimesButtons
                key={tmsId + index}
                time={times.dateTime}
                link={times.ticketURI ? times.ticketURI : ""}
              />
            ))}
          </>
        </div>
      </div>
      {/* pull in movie image from TMDB cache based on movie id */}
      <div className="movie-poster">
        <img
          src={
            moviePoster
              ? moviePoster
              : "https://image.tmdb.org/t/p/w300/5j1JT3Ut7k68Wy2dKGzgP0eAw9v.jpg"
          }
          alt=""
          className="movie-image"
        />
      </div>
    </div>
  );
};

export default Movie;
