import { useState } from "react";
import { PagesContainerStyles } from "/styles/PagesContainerStyles";
import { PaginationStyles } from "/styles/paginationStyles";
import CardsList from "./CardsList";

function PagesContainer({ section }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <PagesContainerStyles>
      <h3>{section} </h3>
      <PaginationStyles className="pagenation">
        <li>1</li>
        <li className={`${currentPage === 1 ? "active" : ""}`}>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>{"->"}</li>
      </PaginationStyles>
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
