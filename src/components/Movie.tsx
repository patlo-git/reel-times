import React from "react";
import { MovieProps } from "../mocks/MovieDB";
import { MovieTimesButtons } from "./MovieTimes";

const Movie: React.FC<MovieProps> = (props) => {
  const { id, title, rating, length, genre, projection, audio, review, times } =
    props;
  return (
    <div className="movie">
      <div className="movie-info">
        <h2>{title}</h2>
        <h3 className="amenities">
          {rating} | {length} | {genre} | {projection} | {audio} | {review}
        </h3>
        <div className="times-wrapper">
          <>
            {(times ?? []).map((time, index) => (
              <MovieTimesButtons key={id + index} time={time} />
            ))}
          </>
        </div>
      </div>
      <div className="movie-poster"></div>
    </div>
  );
};

export default Movie;
