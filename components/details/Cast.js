/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

function CastList({ casts }) {
  return (
    <div className="cast-list">
      <h1 className="cast">Cast</h1>
      {casts.map((cast) => (
        <Cast key={cast.id} cast={cast} />
      ))}
    </div>
  );
}

const Cast = ({ cast }) => {
  const imgSrc = `https://image.tmdb.org/t/p/w300/${cast.profile_path}`;

  return (
    <div className="cast-item" key={cast.id}>
      <div className="cast-item-container">
        {cast.profile_path === null ? (
          <img src="/../../public/placeholder.png" alt={cast.name} />
        ) : (
          <Image
            src={imgSrc}
            alt={cast.name}
            layout="responsive"
            width={300}
            height={450}
          />
        )}

        <div className="cast-item-info">
          <h3>{cast.name}</h3>
          <p>{cast.character.split("/")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default CastList;
