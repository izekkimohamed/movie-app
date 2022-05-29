import Loader from "../components/Loader";
import PagesContainer from "../components/pagesComponent";
import useMoviesData from "../hooks/useMoviesData";

function MoviesPage() {
  const { data, isLoading, isError } = useMoviesData();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <PagesContainer
      section="Popular Movies"
      movies={data.movies}
      media="movies"
      totalPages={data.total_pages}
    />
  );
}

export default MoviesPage;
