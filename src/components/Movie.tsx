import { MovieProps } from "../mocks/MovieDB";

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
          <button>9:30a</button>
          <button>11:45a</button>
          <button>2:10p</button>
          <button>4:30p</button>
          <button>7:10p</button>
          <button>9:45p</button>
          <button>12:15a</button>
        </div>
      </div>
      <div className="movie-poster"></div>
    </div>
  );
};

export default Movie;
