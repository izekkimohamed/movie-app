/* eslint-disable @next/next/no-img-element */
import { useColor } from "color-thief-react";
import Image from "next/image";
import Percentage from "./Percentage";
import { DetailsHeroStyles } from "/styles/DetailsHeroStyles";
const imgURL = `https://image.tmdb.org/t/p/original`;

function DetailsHero({ data }) {
  const src = `${imgURL}${data.backdrop_path}`;
  const {
    data: color,
    loading,
    error,
  } = useColor(src, "hex", {
    crossOrigin: "anonymous",
    quality: 10,
  });
  const title = data.title || data.name;
  const releaseDate = data.release_date || data.first_air_date;
  const countries = data.production_countries || data.origin_country;

  console.log();
  return (
    <DetailsHeroStyles color={color} src={src}>
      <div className="container">
        <div className="poster">
          <Image
            className="img"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt={title}
            layout="responsive"
            width={300}
            height={450}
          />
        </div>

        <div className="content">
          <div className="title">
            <p>
              {title}
              <Percentage percent={data.vote_average} />
            </p>
          </div>

          <div className="description">
            <p>{data.overview}</p>
          </div>
          {countries && (
            <div className="details">
              <p>Country: </p>
              <strong>
                {countries.map((country) => country.name).join(", ")}
              </strong>
            </div>
          )}
          {data.genre && (
            <div className="details">
              <p>Genres: </p>
              <strong>
                {data.genres.map((genre) => genre.name).join(", ")}
              </strong>
            </div>
          )}
          {releaseDate && (
            <div className="details">
              <p>Release Date: </p>
              <strong>{releaseDate}</strong>
            </div>
          )}
          {data.production_companies && (
            <div className="details">
              <p>Production: </p>
              <strong>
                {data.production_companies
                  .map((company) => company.name)
                  .join(", ")}
              </strong>
            </div>
          )}

          {/* <div className="details">
            <p>Director: </p>
            <strong>
              {data.created_by.map((crew, i) => crew.name).join(", ") ||
                data.credits.crew
                  .filter((crew, i) => crew.job === "Director")
                  .map((crew, i) => crew.name)
                  .join(", ")}
            </strong>
          </div> */}
        </div>
      </div>
    </DetailsHeroStyles>
  );
}

export default DetailsHero;
