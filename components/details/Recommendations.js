import React from "react";
import CardsList from "../CardsList";

export default function Recommendations({ recommendations }) {
  const placeHolderImg = "via.placeholder.com/300x300";
  return (
    <div className="recommendations">
      <h1>Recommendations</h1>
      <div className="recommendation">
        <div className="cast-list">
          {recommendations &&
            recommendations.map((recommendation, i) => {
              return <CardsList key={i} movies={[recommendation]} />;
            })}
        </div>
      </div>
    </div>
  );
}
