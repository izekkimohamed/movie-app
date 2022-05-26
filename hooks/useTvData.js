import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function useTvData() {
  const pageNum = useRouter().query.page;
  const page = pageNum === undefined ? 1 : parseInt(pageNum);
  const currentPage = page !== 1 ? page * 2 - 1 : page;
  const nextPage = currentPage + 1;

  async function fetchMovies() {
    const [movies1, movie2] = await Promise.all([
      axios.get(`/api/tv?page=${currentPage}&type=on_the_air`),
      axios.get(`/api/tv?page=${nextPage}&type=on_the_air`),
    ]);
    const movies = [...movies1.data.results, ...movie2.data.results];

    return movies.map((movie) => ({
      ...movie,
      media_type: "tv",
    }));
  }

  return useQuery(["movies", currentPage], fetchMovies, {
    refetchOnWindowFocus: false,
  });
}
