interface MovieTheaterTimesProps {
  time: string;
  link: string | undefined;
  movieUrl: string | undefined;
}

export const MovieTimesButtons = ({
  time,
  link,
  movieUrl,
}: MovieTheaterTimesProps) => {
  const abreviatedTime = new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleClick = () => {
    if (link) {
      const newWindow = window.open(link, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    } else if (movieUrl) {
      const newWindow = window.open(movieUrl, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    }
  };

  return link || movieUrl ? (
    <button className={"movie-link"} onClick={handleClick}>
      {abreviatedTime}
    </button>
  ) : (
    <button className={"no-movie-link"} onClick={handleClick}>
      {abreviatedTime}
    </button>
  );
};
