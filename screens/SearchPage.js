import PagesContainer from "../components/pagesComponent";
import useSearch from "../hooks/useSerachData";
import Loader from "../components/Loader";
import { useRouter } from "next/router";

export default function SearchPage() {
  const { q } = useRouter().query;
  const { data, isLoading, isError } = useSearch();

  if (isLoading) return <Loader />;

  return (
    data && (
      <PagesContainer
        section={`Search results for "${q}"`}
        movies={data.movies}
        media="search"
        q={q}
        totalPages={data.total_pages}
      />
    )
  );
}
