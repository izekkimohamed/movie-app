import { PagesContainerStyles } from "/styles/PagesContainerStyles";
import CardsList from "./CardsList";
import Pagination from "./Pagination";

function PagesContainer({ section, movies, media, q, totalPages }) {
  return (
    <PagesContainerStyles>
      <h3>{section} </h3>
      <Pagination media={media} q={q} totalPages={totalPages} />
      <CardsList movies={movies} />
      <Pagination media={media} q={q} totalPages={totalPages} />
    </PagesContainerStyles>
  );
}

export default PagesContainer;
