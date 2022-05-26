import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export default function useHomeData(type) {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  useQuery(
    ["movies", type],
    () =>
      axios
        // Promise.all
        .get(`/api/movies`)
        .then((res) =>
          setMovies(
            res.data.results.map((movie) => ({
              ...movie,
              media_type: "movie",
            })),
          ),
        ),

    {
      retry: 1,
    },
  );

  useQuery(
    ["tv", type],
    () =>
      axios.get(`/api/tv`).then((res) =>
        setShows(
          res.data.results.map((show) => ({
            ...show,
            media_type: "tv",
          })),
        ),
      ),
    {
      retry: 1,
    },
  );
  return {
    movies,
    shows,
  };
}
