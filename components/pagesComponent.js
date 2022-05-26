import { PagesContainerStyles } from "/styles/PagesContainerStyles";
import CardsList from "./CardsList";
import Pagination from "./Pagination";

function PagesContainer({ section, movies, media }) {
  return (
    <PagesContainerStyles>
      <h3>{section} </h3>
      <Pagination media={media} />
      <CardsList movies={movies} />
      <Pagination media={media} />
    </PagesContainerStyles>
  );
}

export default PagesContainer;
