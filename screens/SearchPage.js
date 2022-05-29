import { useRouter } from "next/router";
import PagesContainer from "../components/pagesComponent";
import { useStore } from "../store/searchStore";

export default function SearchPage() {
  const { q, page } = useRouter().query;
  const p = page || 1;
  const { searchResults, setSearchResults } = useStore((state) => state);

  function fetchSearchData(text, p) {
    fetch(`http://localhost:3000/api/search?q=${text}&page=${p}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults({
          movies: data.results,
          total_pages: data.total_pages,
          searchTerm: text,
          page: p,
        });
      });
  }
  if (
    searchResults.searchTerm !== q ||
    !searchResults.searchTerm ||
    searchResults.page !== p
  ) {
    fetchSearchData(q, p);
  }

  return (
    searchResults && (
      <PagesContainer
        section={`Search results for "${searchResults.searchTerm}"`}
        movies={searchResults.movies}
        media="search"
        q={q}
        totalPages={searchResults.total_pages}
      />
    )
  );
}
