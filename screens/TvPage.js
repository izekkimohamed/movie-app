import Loader from "../components/Loader";
import PagesContainer from "../components/pagesComponent";
import useTvData from "../hooks/useTvData";

function TvPage() {
  const { data, isLoading, isError } = useTvData();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <PagesContainer
      section="Popular Tv Shows"
      movies={data.movies}
      media="tv"
      totalPages={data.total_pages}
    />
  );
}

export default TvPage;
