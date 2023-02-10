import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useParams, Link } from "react-router-dom";
import CastList from "../components/cast/CastList";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const Api = `https://api.themoviedb.org/3/movie/${id}?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US`;
    const fetchData = async () => {
      try {
        await axios.get(Api).then((res) => {
          const data = res.data;
          setFilm(data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (film) {
      fetchData();
    }
  });

  return (
    <>
      {film && (
        <div className="box">
          <div className="details_box">
            <img
              className="detalisimg"
              src={`https://image.tmdb.org/t/p/w500${
                film.backdrop_path || film.poster_path
              }`}
              alt=""
            />{" "}
            <ul className="detalislist">
              <li className="detailsitem">
                <h1 className="text">
                  {film.title ||
                    film.original_title ||
                    film.name ||
                    film.original_name}
                </h1>
              </li>
              <li className="detailsitem">
                <h4 className="details_title">User Score </h4>
                <p className="desc">{film.vote_average}</p>
              </li>
              <li>
                <h4 className="details_title">Overview</h4>
                <p className="desc">{film.overview}</p>
              </li>
              <li className="detailsitem">
                {" "}
                <p className="details_title">{film.release_date}</p>
              </li>
              <li className="cast">
                <Link to="cast">Cast</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Routes>
        <Route path="cast" element={<CastList id={id} />} />
      </Routes>
    </>
  );
};

export default MovieDetailsPage;
