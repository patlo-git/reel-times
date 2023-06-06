interface MovieTheaterTimesProps {
  time: string;
}

export const MovieTimesButtons = ({ time }: MovieTheaterTimesProps) => {
  return <button>{time}</button>;
};
