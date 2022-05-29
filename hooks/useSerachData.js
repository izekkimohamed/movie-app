import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function useSearch() {
  const pageNum = useRouter().query.page;
  const { q } = useRouter().query;
  const page = pageNum === undefined ? 1 : parseInt(pageNum);

  async function fetchMovies() {
    const res = await axios.get(`/api/search?q=${q}&page=${page}`);
    const { data } = res;

    return {
      movies: data.results,
      total_pages: data.total_pages,
    };
  }

  return useQuery(["search", q, page], fetchMovies, {
    refetchOnWindowFocus: false,
  });
}
