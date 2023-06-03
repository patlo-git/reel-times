import { MovieProps } from "../mocks/MovieDB";
import { MovieTimesButtons } from "./MovieTimes";

const Movie = (props: MovieProps) => {
  return (
    <div className="movie">
      <div className="movie-info">
        <h2>{props.title}</h2>
        <h3 className="amenities">
          {props.rating} | {props.length} | {props.genre} | {props.projection} |{" "}
          {props.audio} | {props.review}
        </h3>
        <div className="times-wrapper">
          <MovieTimesButtons id={""} time={""} />
        </div>
      </div>
      <div className="movie-poster"></div>
    </div>
  );
};

export default Movie;
