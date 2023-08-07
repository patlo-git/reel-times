import React from "react";
import { MovieTimesButtons } from "./MovieTimes";
import { MovieProps } from "../types";
import { MovieList } from "../mocks/TMDBData";
import { blueShort } from "../assets";

const Movie: React.FC<MovieProps> = (props) => {
  const {
    tmsId,
    title,
    genres,
    ratings,
    runTime,
    showtimes,
    releaseYear,
    officialUrl,
  } = props;

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

  const getReview = () => {
    const movie = MovieList.find((movie) => movie.id === tmsId);

    if (movie && movie?.review) {
      const review = movie.review;

      if (Number.isNaN(movie?.review)) {
        console.log("NaN");
        return "";
      } else {
        const splitReview = review.split(".");
        const fractional = splitReview[1];
        if (fractional) {
          if (fractional.length < 2) {
            return review;
          } else {
            const fractionalToTenth = fractional.slice(0, 2);

            const roundedFraction = Math.round(
              parseInt(fractionalToTenth) / 10
            ).toString();

            splitReview.splice(1, 1, ".", roundedFraction).join("");
            return splitReview;
          }
        }
      }
      return review + ".0";
    }
  };

  const newReview = getReview();

  const getArt = () => {
    const movie = MovieList.find((movie) => movie.id === tmsId);

    return movie && movie.url
      ? movie.url
      : "https://image.tmdb.org/t/p/w300/5j1JT3Ut7k68Wy2dKGzgP0eAw9v.jpg";
  };

  const moviePoster = getArt();

  return (
    <div className="movie">
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <h4 className="amenities">
          {(ratings ?? []).length > 0 ? (
            (ratings ?? []).map((ratingItem, index) => (
              <span key={tmsId + index}>{ratingItem.code}</span>
            ))
          ) : (
            <span>NR</span>
          )}{" "}
          | {convertTime} | {releaseYear} | {firstTwoGenres} | {amenity}{" "}
          {newReview ? newReview : "NA"}{" "}
          {newReview && <img className="TMDB-logo" src={blueShort} alt="" />}
        </h4>
        <div className="times-wrapper">
          <>
            {(showtimes ?? []).map((times, index) => (
              <div key={tmsId + index} className="button-wrapper-base">
                <MovieTimesButtons
                  key={tmsId + index}
                  time={times.dateTime}
                  link={times.ticketURI ? times.ticketURI : ""}
                  movieUrl={officialUrl ? officialUrl : ""}
                />
              </div>
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
