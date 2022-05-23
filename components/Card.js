/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Percentage from "./Percentage";
import { CardStyles } from "/styles/CardStyles";

const imgURL = "https://image.tmdb.org/t/p/original";

function Card({ movie }) {
  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date;
  return (
    <CardStyles>
      <Link
        href={`/details/${movie.id}?media_type=${movie.media_type}`}
        passHref>
        <div className="poster pointer">
          <img
            title={title}
            alt={title}
            className="film-poster-img lazyloaded"
            src={`${imgURL}${movie.poster_path}`}
          />
        </div>
      </Link>{" "}
      <div className="details">
        <h5 className="title">{title}</h5>
        <div className="date">
          <p className="year">{releaseDate.split("-")[0]}</p>
          <Percentage percent={movie.vote_average} />
        </div>
      </div>{" "}
    </CardStyles>
  );
}

export default Card;
