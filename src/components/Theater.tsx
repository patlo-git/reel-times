import React from "react";
import Movie from "./Movie";
import { MovieProps } from "../components/MovieData";

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
                  releaseDate,
                  language,
                  genres,
                  shortDescription,
                  cast,
                  directors,
                  ratings,
                  runTime,
                  projection,
                  audio,
                  review,
                  showtimes,
                } = movie;

                return (
                  <Movie
                    key={id}
                    id={id}
                    title={title}
                    releaseDate={releaseDate}
                    language={language}
                    genres={genres}
                    shortDescription={shortDescription}
                    cast={cast}
                    directors={directors}
                    ratings={ratings}
                    runTime={runTime}
                    projection={projection}
                    audio={audio}
                    review={review}
                    showtimes={showtimes}
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
