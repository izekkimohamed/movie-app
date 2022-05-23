import { useState } from "react";
import { PagesContainerStyles } from "/styles/PagesContainerStyles";
import CardsList from "./CardsList";

function PagesContainer({ section }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <PagesContainerStyles>
      <h3>{section} </h3>
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
      <CardsList />
    </PagesContainerStyles>
  );
}

export default PagesContainer;
