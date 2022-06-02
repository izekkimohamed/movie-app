import React from "react";

export default function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <h1>Reviews</h1>

      {reviews &&
        reviews.results.map((review, i) => (
          <div className="review" key={review.id}>
            <div className="review-info">
              <h3>{review.author}</h3>
              <p>{review.created_at.split("T")[0]}</p>
            </div>
            <p>
              {review.content.length > 200
                ? review.content.slice(0, 200) + "..."
                : review.content}

              <a href={`${review.url}`} target="_blank" rel="noreferrer">
                Read More
              </a>
            </p>
          </div>
        ))}
    </div>
  );
}
