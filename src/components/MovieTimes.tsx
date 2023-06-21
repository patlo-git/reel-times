interface MovieTheaterTimesProps {
  time: string;
}

export const MovieTimesButtons = ({ time }: MovieTheaterTimesProps) => {
  const abreviatedTime = new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return <button>{abreviatedTime}</button>;
};
