import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function useTvData() {
  const pageNum = useRouter().query.page;
  const page = pageNum === undefined ? 1 : parseInt(pageNum);
  const currentPage = page !== 1 ? page * 2 - 1 : page;
  const nextPage = currentPage + 1;

  async function fetchMovies() {
    const [shows1, shows2] = await Promise.all([
      axios.get(`/api/tv?page=${currentPage}&type=on_the_air`),
      axios.get(`/api/tv?page=${nextPage}&type=on_the_air`),
    ]);
    const data = [...shows1.data.results, ...shows2.data.results];
    const totalPages = shows1.data.total_pages;

    const shows = data.map((show) => ({
      ...show,
      media_type: "tv",
    }));
    return {
      shows,
      total_pages: totalPages,
    };
  }

  return useQuery(["tv", currentPage], fetchMovies, {
    refetchOnWindowFocus: false,
  });
}
