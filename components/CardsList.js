import { CardsListStyles } from "../styles/CardsListStyles";
import Card from "./Card";

function CardsList({ section, movies }) {
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

export default CardsList;
