const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.genre}</h2>
    </div>
  );
};

export default Movie;
