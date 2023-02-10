import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CastItem from "./CastItem";

export default function CastList() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const Api = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US`;
    axios.get(Api).then(async (res) => {
      const data = await res.data;

      const { cast } = data;
      setCast(cast);
    });
  }, []);

  return (
    <div className="cast_box container">
      {cast && (
        <>
          <ul className="list__">
            {cast.map((item) => (
              <CastItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
