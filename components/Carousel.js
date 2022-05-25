/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { getGenre } from "../libs/getGenre";
import { CarouselStyles } from "../styles/CarouselStyles";

const imgURL = "https://image.tmdb.org/t/p/original";

export default function CarouselContainer({ movies }) {
  // console.log(movies);
  return (
    <CarouselStyles showStatus={false} showThumbs={false}>
      {movies.map((movie, i) => {
        return (
          <div key={movie.id} className="slider-item">
            <div className="content">
              <div className="slide-caption">
                <h3 className="title">
                  <Link
                    href={`/details/${movie.id}?media_type=${movie.media_type}`}
                    passHref
                    title={`${movie.title}`}>
                    {movie.title}
                  </Link>
                </h3>{" "}
                <div className="details">
                  <div className="details-item">
                    IMDB: <strong>{movie.vote_average}</strong>
                  </div>{" "}
                  <div className="details-item">
                    Genre:{" "}
                    <strong>
                      {movie.genre_ids.map((genre) => `${getGenre(genre)}  `)}
                    </strong>
                  </div>{" "}
                </div>{" "}
                <p className="desc">{movie.overview}</p>{" "}
                <div className="buttons">
                  <Link
                    href={`/details/${movie.id}?media_type=${movie.media_type}`}
                    passHref
                    className="btn">
                    See More
                  </Link>{" "}
                </div>{" "}
              </div>
            </div>
            <Image
              priority
              src={`${imgURL}${movie.backdrop_path}`}
              alt={movie.title}
              title={movie.title}
              layout="fill"
            />
          </div>
        );
      })}
    </CarouselStyles>
  );
}
