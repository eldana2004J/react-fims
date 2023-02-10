import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar/Searchbar";
import Movie from "../components/movie/MovieList";
import Loader from "../components/loader/Loader";
export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const Api = ` https://api.themoviedb.org/3/search/movie?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US&page=${page}&include_adult=false&query=${query}`;
    const fetchData = async () => {
      try {
        await axios.get(Api).then((res) => {
          const data = res.data.results;
          setMovie((prevState) => {
            return [...prevState, ...data];
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (query) {
      fetchData();
    }
  }, [page, query]);

  useEffect(() => {
    const Api = `https://api.themoviedb.org/3/search/movie?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US&page=${page}&include_adult=true&query=${query}&`;

    if (query !== "") {
      axios.get(Api).then((res) => {
        const data = res.data;
        setMovie(data.results);
      });
    }
  }, [query]);

  const onSubmit = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleSubmit = (data) => {
    setQuery(data);
  };

  return (
    <>
      <div className="box">
        <div className="container">
          <Searchbar onSubmit={handleSubmit} />

          {movie.length > 0 && <Movie movie={movie} />}
          {movie.length > 0 && <Loader onClick={onSubmit} />}
        </div>
      </div>
    </>
  );
}
