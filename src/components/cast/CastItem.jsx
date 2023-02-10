import React from "react";
import img from "../../assets/img/no_img.jpg";

export default function Castitem({ name, profile_path }) {
  return (
    <li className="cast_wrapper">
      {
        <img
          className="castimg"
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : img
          }
          alt=""
        />
      }
      <p className="text__">{name}</p>
    </li>
  );
}
