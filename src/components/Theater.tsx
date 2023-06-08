import React from "react";
import Movie from "./Movie";
import { MovieProps } from "../mocks/MovieDB";

interface TheaterProps {
  movies: MovieProps[];
}

const Theater: React.FC<TheaterProps> = ({ movies }) => {
  return (
    <div className="theater-container">
      <div>
        <div className="theater-name-wrapper">
          <h1>Theater</h1>
        </div>
        <div className="movies-container">
          <div className="movies-wrapper">
            <>
              {movies.map((movie) => {
                const {
                  id,
                  title,
                  rating,
                  length,
                  genre,
                  projection,
                  audio,
                  review,
                  times,
                } = movie;
                return (
                  <Movie
                    key={id}
                    title={title}
                    rating={rating}
                    length={length}
                    genre={genre}
                    projection={projection}
                    audio={audio}
                    review={review}
                    times={times}
                  />
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theater;
