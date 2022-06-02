import { CardsListStyles } from "../styles/CardsListStyles";
import Card from "./Card";

export default function CardsList({ section, movies }) {
  return (
    <CardsListStyles>
      {movies && (
        <>
          <h2>{section}</h2>
          <ul className="cards-container">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </ul>
        </>
      )}
    </CardsListStyles>
  );
}
