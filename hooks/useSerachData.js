import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function useSearch(debouncedSearch) {
  const pageNum = useRouter().query.page;
  const { q } = useRouter().query;
  const page = pageNum === undefined ? 1 : parseInt(pageNum);

  const searchTerm = debouncedSearch === undefined ? q : debouncedSearch;

  async function fetchMovies() {
    if (searchTerm !== "") {
      const res = await axios.get(`/api/search?q=${searchTerm}&page=${page}`);
      const { data } = res;
      return {
        movies: data.results,
        total_pages: data.total_pages,
      };
    }
  }

  return useQuery(["search", searchTerm, page], fetchMovies, {
    refetchOnWindowFocus: false,
  });
}
