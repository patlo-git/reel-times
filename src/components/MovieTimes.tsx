interface MovieTheaterTimesProps {
  time: string;
  link: string | undefined;
}

export const MovieTimesButtons = ({ time, link }: MovieTheaterTimesProps) => {
  const abreviatedTime = new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <button onClick={handleClick} disabled={!link}>
      {abreviatedTime}
    </button>
  );
};
