import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList({ movie }) {
  const movieItem = movie.map((item) => {
    return <MovieItem key={item.id} {...item} />;
  });
  return (
    <>
      <ul className="list">{movieItem}</ul>
    </>
  );
}
