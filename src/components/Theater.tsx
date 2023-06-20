import React from "react";
import Movie from "./Movie";
import { MovieProps } from "../mocks/MovieDB";

interface TheaterProps {
  movies: MovieProps[];
  data: string;
}

const Theater: React.FC<TheaterProps> = ({ movies, data }) => {
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
                    id={id}
                    title={data}
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
