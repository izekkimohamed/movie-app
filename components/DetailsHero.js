import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaRegPlayCircle } from "react-icons/fa";
import Color from "color-thief-react";
import Percentage from "./Percentage";
import Loader from "./Loader";
import { DetailsHeroStyles } from "../styles/DetailsHeroStyles";
import useDetailsData from "../hooks/useDetailsData";
import TrailerFrame from "./details/TrailerFrame";
const imgURL = `https://image.tmdb.org/t/p/w500`;

function DetailsHero() {
  const [showTrailer, setShowTrailer] = useState(false);
  const { id, media_type } = useRouter().query;
  const { data, isLoading, isError } = useDetailsData(id, media_type);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error...</p>;

  const src = `${imgURL}${data.backdrop_path}`;
  const title = data.title || data.name;
  const releaseDate = data.release_date || data.first_air_date;
  const countries = data.production_countries || data.origin_country;
  const directors = data.credits.crew.filter((crew) => crew.job === "Director");
  const createdBy = data.created_by;
  const trailerVideo = data.videos.results.find(
    (video) => video.type.includes("Trailer") && video.site === "YouTube",
  );
  console.log(trailerVideo);
  const imgSrc = `${imgURL}${data.poster_path}`;
  return (
    <Color src={imgSrc} format="hex" crossOrigin="anonymous" quality="10">
      {({ data: color, loading, error }) => (
        <DetailsHeroStyles color={color} src={src}>
          {showTrailer && (
            <TrailerFrame
              trailerVideo={trailerVideo}
              setShowTrailer={setShowTrailer}
            />
          )}
          <div className="container">
            <div className="poster">
              <Image
                className="img"
                src={imgSrc}
                alt={title}
                layout="responsive"
                width={300}
                height={450}
                priority
              />
            </div>

            <div className="content">
              <div className="title">
                <p>{title}</p>
                <Percentage percent={data.vote_average} />
                {trailerVideo !== undefined && (
                  <button
                    className="play-icon"
                    onClick={() => setShowTrailer(!showTrailer)}>
                    <FaRegPlayCircle />
                  </button>
                )}
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

              <div className="details">
                {directors && (
                  <>
                    <p>Directors: </p>
                    <strong>
                      {directors.map((director) => director.name).join(", ")}
                    </strong>
                  </>
                )}
                {createdBy && (
                  <>
                    <p>Created By: </p>
                    <strong>
                      {createdBy.map((creator) => creator.name).join(", ")}
                    </strong>
                  </>
                )}
              </div>
            </div>
          </div>
        </DetailsHeroStyles>
      )}
    </Color>
  );
}

export default DetailsHero;
