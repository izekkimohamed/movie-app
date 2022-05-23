import { useEffect, useRef } from "react";
import { CardsListStyles } from "../styles/CardsListStyles";
import Card from "./Card";

function CardsList({ section, movies }) {
  return (
    <CardsListStyles>
      <h2>{section}</h2>
      <ul className="cards-container">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>
    </CardsListStyles>
  );
}

export default CardsList;
