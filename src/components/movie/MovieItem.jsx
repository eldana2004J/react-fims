import React from "react";
import { Link, NavLink } from "react-router-dom";

function MovieItem({
  release_date,
  name,
  original_title,
  original_name,
  first_air_date,
  title,
  backdrop_path,
  poster_path,
  id,
}) {
  return (
    <li className="item">
      <NavLink to={`/movie/${id}/`}>
        <img
          className="movieimg"
          src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
          alt=""
        />
        <h2 className="subtitle">
          {title || original_title || name || original_name}
        </h2>
      </NavLink>
    </li>
  );
}

export default MovieItem;
