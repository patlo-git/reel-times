export interface MovieProps {
  id?: number;
  title: string;
  rating: string;
  length: string;
  genre?: string;
  projection?: string;
  audio?: string;
  review?: string;
}

export const movies: MovieProps[] = [
  {
    id: 123,
    title: "Movie 0",
    rating: "PG-13",
    length: "135 minutes",
    genre: "action",
    projection: "imax",
    audio: "imax digital",
    review: "89% RT",
  },
  {
    id: 456,
    title: "Movie 1",
    rating: "R",
    length: "123 minutes",
    genre: "drama",
    projection: "70mm",
    audio: "thx",
    review: "98% RT",
  },
  {
    id: 789,
    title: "Movie 2",
    rating: "PG",
    length: "112 minutes",
    genre: "Documentary",
    projection: "4k",
    audio: "dts",
    review: "92% RT",
  },
];
