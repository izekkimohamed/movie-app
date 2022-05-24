/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Recommendations({ recommendations }) {
  return (
    <div className="recommendations">
      <h1>Recommendations</h1>
      <div className="recommendation">
        <div className="cast-list">
          {recommendations &&
            recommendations.map((recommendation, i) => {
              const imgSrc =
                recommendation.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w300${recommendation.poster_path}`
                  : placeHolderImg;
              return (
                <Link
                  href={`/details/${recommendation.id}?media_type=${recommendation.media_type}`}
                  passHref
                  key={recommendation.id}>
                  <div className="cast-item pointer">
                    <div className="cast-item-container">
                      <img src={imgSrc} alt={recommendation.title} />
                      <div className="cast-item-info">
                        <h3>{recommendation.title || recommendation.name}</h3>
                        <p>{recommendation.release_date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
