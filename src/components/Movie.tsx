import React from "react";
import { MovieTimesButtons } from "./MovieTimes";
import { MovieProps } from "../types";

const Movie: React.FC<MovieProps> = (props) => {
  const { tmsId, title, genres, ratings, runTime, showtimes } = props;

  const firstTwoGenres = genres?.slice(0, 2).join(", ");
  const convertTime = runTime.slice(2);

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
          | {convertTime} | {firstTwoGenres} | {"projection"} | {"audio"} |{" "}
          {"review"}
        </h3>
        <div className="times-wrapper">
          <>
            {(showtimes ?? []).map((times, index) => (
              <MovieTimesButtons key={tmsId + index} time={times.dateTime} />
            ))}
          </>
        </div>
      </div>
      <div className="movie-poster"></div>
    </div>
  );
};

export default Movie;
