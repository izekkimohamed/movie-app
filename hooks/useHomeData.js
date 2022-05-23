import axios from "axios";
import { useEffect, useState } from "react";
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

// export default function useHomeData(type) {
//   const [movies, setMovies] = useState([]);
//   const [shows, setShows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     getMovies();
//     getShows();
//   }, []);

//   async function getMovies() {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=2&append_to_response=media_type`,
//       );
//       const data = await response.json();
//       const results = data.results;
//       const newResults = results.map((movie) => {
//         return {
//           ...movie,
//           media_type: "movie",
//         };
//       });
//       setMovies(newResults);
//       setLoading(false);
//     } catch (error) {
//       setError(true);
//     }
//   }

//   async function getShows() {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/tv/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1&append_to_response=media_type`,
//       );
//       const data = await response.json();
//       const results = data.results;
//       const newResults = results.map((movie) => {
//         return {
//           ...movie,
//           media_type: "tv",
//         };
//       });
//       setShows(newResults);
//       setLoading(false);
//     } catch (error) {
//       setError(true);
//     }
//   }

//   return { movies, shows, loading, error };
// }
