import React from "react";
import { MovieProps } from "../components/MovieData";
import { MovieTimesButtons } from "./MovieTimes";

const Movie: React.FC<MovieProps> = (props) => {
  const {
    id,
    title,
    genres,
    ratings,
    runTime,
    projection,
    audio,
    review,
    showtimes,
  } = props;

  const firstTwoGenres = genres?.slice(0, 2).join(", ");
  const convertTime = runTime.slice(2);

  console.log("ratings: ", ratings);

  return (
    <div className="movie">
      <div className="movie-info">
        <h2>{title}</h2>
        <h3 className="amenities">
          {(ratings ?? []).map((ratingItem) => (
            <span key={id}>{ratingItem.code}</span>
          ))}{" "}
          | {convertTime} | {firstTwoGenres} | {projection} | {audio} | {review}
        </h3>
        <div className="times-wrapper">
          <>
            {(showtimes ?? []).map((times, index) => (
              <MovieTimesButtons key={id + index} time={times.dateTime} />
            ))}
          </>
        </div>
      </div>
      <div className="movie-poster"></div>
    </div>
  );
};

export default Movie;
