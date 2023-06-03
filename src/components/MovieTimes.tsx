import React from "react";

interface MovieTheaterTimesProps {
  times: string[];
}

interface MovieTimeButtonProps {
  id: string;
  time: string;
}

const MovieTheaterTimes: MovieTheaterTimesProps[] = [
  {
    times: ["9:30a", "11:45a", "2:10p", "4:30p", "7:10p", "9:45p", "12:15a"],
  },
];

export const MovieTimesButtons: React.FC<MovieTimeButtonProps> = () => {
  return (
    <>
      {MovieTheaterTimes[0].times.map((time: string) => {
        return <button key={time}>{time}</button>;
      })}
    </>
  );
};
