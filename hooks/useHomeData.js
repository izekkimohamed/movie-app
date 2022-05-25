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
        .get(`https://api.themoviedb.org/3/movie/${type}`, {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
            language: "en-US",
            page: 1,
          },
        })
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
      axios
        .get(`https://api.themoviedb.org/3/tv/${type}`, {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
            language: "en-US",
            page: 1,
          },
        })
        .then((res) =>
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
