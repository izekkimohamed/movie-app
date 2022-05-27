/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../Card";
import CardsList from "../CardsList";

function Recommendations({ recommendations }) {
  const placeHolderImg = "via.placeholder.com/300x300";
  return (
    <div className="recommendations">
      <h1>Recommendations</h1>
      <div className="recommendation">
        <div className="cast-list">
          {recommendations &&
            recommendations.map((recommendation, i) => {
              const imgSrc = `https://image.tmdb.org/t/p/w300${recommendation.poster_path}`;

              return <CardsList key={i} movies={[recommendation]} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
