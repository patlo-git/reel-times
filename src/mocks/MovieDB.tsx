export interface MovieProps {
  id?: number;
  title: string;
  rating: string;
  length: string;
  genre?: string;
  projection?: string;
  audio?: string;
  review?: string;
  times: string[];
}

export const MOVIESINFO: MovieProps[] = [
  {
    id: 123,
    title: "Movie 0",
    rating: "PG-13",
    length: "135 minutes",
    genre: "action",
    projection: "imax",
    audio: "imax digital",
    review: "89% RT",
    times: ["9:30a", "12:15p", "3:00p", "5:30p", "8:00p"],
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
    times: ["10:00a", "12:30p", "3:10p", "5:30p", "7:45p", "10:00p", "12:15a"],
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
    times: ["9:00a", "11:15a", "1:30p", "3:45p", "6:00p", "8:15p", "10:30p"],
  },
];
