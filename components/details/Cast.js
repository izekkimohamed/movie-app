/* eslint-disable @next/next/no-img-element */
import React from "react";

function Cast({ cast }) {
  const placeHolderImg =
    "https://via.placeholder.com/300x450?text=no-image&font=lobster";
  return (
    <div className="cast-list">
      <h1 className="cast">Cast</h1>
      {cast &&
        cast.map((cast, i) => {
          const imgSrc =
            cast.profile_path !== null
              ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
              : placeHolderImg;
          return (
            <div className="cast-item" key={cast.id}>
              <div className="cast-item-container">
                <img src={imgSrc} alt={cast.name} />
                <div className="cast-item-info">
                  <h3>{cast.name}</h3>
                  <p>{cast.character.split("/")[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cast;
