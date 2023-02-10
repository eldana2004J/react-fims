import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/movie/MovieList";
import Loader from "../components/loader/Loader";

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const Api = `https://api.themoviedb.org/3/trending/all/day?api_key=cd0424926ff3c009921c9fa2e813a15c&page=${page}&adult=false`;
    const fetchData = async () => {
      try {
        await axios.get(Api).then((resp) => {
          const data = resp.data;
          setMovie(() => {
            return [...movie, ...data.results];
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);
  const onClick = () => {
    setPage((prevState) => prevState + 1);
  };
  return (
    <>
      <div className=" wrapper">
        {movie.length > 0 && <Movie movie={movie} />}
        {movie.length > 0 && <Loader onClick={onClick} />}
      </div>
    </>
  );
};

export default HomePage;
