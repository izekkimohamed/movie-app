import { useState } from "react";
import PagesContainer from "../components/pagesComponent";
import useMoviesData from "../hooks/useMoviesData";

function MoviesPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useMoviesData(page);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <PagesContainer
      section="Popular Movies"
      movies={data}
      page={page}
      setPage={setPage}
    />
  );
}

export default MoviesPage;
