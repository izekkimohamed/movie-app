import Link from "next/link";
import Percentage from "./Percentage";
import { CardStyles } from "../styles/CardStyles";
import Image from "next/image";

const imgURL = "https://image.tmdb.org/t/p/w300";

function Card({ movie }) {
  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date || "-";
  return (
    <CardStyles>
      <div className="percent">
        <Percentage percent={movie.vote_average} />
      </div>
      <Link
        href={`/details/${movie.id}?media_type=${movie.media_type}`}
        passHref>
        <div className="poster pointer">
          <Image
            src={`${imgURL}${movie.poster_path}`}
            alt={title}
            layout="fill"
            title={title}
          />
        </div>
      </Link>{" "}
      <div className="details">
        <h5 className="title">{title}</h5>
        <div className="date">
          <p className="year">{releaseDate.split("-")[0]}</p>
          <div className="media-type">
            <p>{movie.media_type}</p>
          </div>
        </div>
      </div>{" "}
    </CardStyles>
  );
}

export default Card;
