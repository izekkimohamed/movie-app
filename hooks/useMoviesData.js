import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function useMoviesData() {
  const pageNum = useRouter().query.page;
  const page = pageNum === undefined ? 1 : parseInt(pageNum);
  const currentPage = page !== 1 ? page * 2 - 1 : page;
  const nextPage = currentPage + 1;

  async function fetchMovies() {
    const [movies1, movie2] = await Promise.all([
      axios.get(`/api/movies?page=${currentPage}`),
      axios.get(`/api/movies?page=${nextPage}`),
    ]);
    const data = [
      ...movies1.data.results,
      ...movie2.data.results.filter((_, i) => i !== 0),
    ];
    const totalPages = movies1.data.total_pages;

    const movies = data.map((movie) => ({
      ...movie,
      media_type: "movie",
    }));
    return {
      movies,
      total_pages: totalPages,
    };
  }

  return useQuery(["movies", currentPage], fetchMovies, {
    refetchOnWindowFocus: false,
  });
}
