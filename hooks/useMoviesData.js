import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

// page 1 = 1 and 2 =>
// page 2 = 3 and 4 =>
// page 3 = 5 and 6 =>
// page 4 = 7 and 8 =>
// page 5 = 9 and 10 =>
// page 6 = 11 and 12 =>

export default function useMoviesData(page) {
  const currentPage = page !== 1 ? page * 2 - 1 : page;
  const nextPage = currentPage + 1;

  async function fetchMovies(key, page) {
    const [movies1, movie2] = await Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${currentPage}`,
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${nextPage}`,
      ),
    ]);
    const movies = [...movies1.data.results, ...movie2.data.results];

    return movies.map((movie) => ({
      ...movie,
      media_type: "movie",
    }));
  }

  return useQuery(["movies", currentPage], fetchMovies);
}
