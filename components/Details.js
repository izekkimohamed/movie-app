/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsLink } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
import { DetailsStyles } from "/styles/DetailsStyles";

function Details({ data }) {
  const { credits, budget, revenue, external_ids, reviews } = data;
  const cast = credits.cast.filter((cast, i) => i < 10);
  const recommendations = data.recommendations.results.filter(
    (recommendation, i) => i < 10,
  );

  const placeHolderImg =
    "https://via.placeholder.com/300x450?text=no-image&font=lobster";
  return (
    <DetailsStyles>
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

      <div className="status">
        <ul className="social-media">
          <li className="icon">
            <a
              href={`https://fb.com/${external_ids.facebook_id}`}
              target="_blank"
              className="facebook"
              rel="noreferrer">
              <BsFacebook viewBox="-2 -2 21 21" />
            </a>
          </li>
          <li className="icon">
            <a
              href={`https://instagram.com/${external_ids.instagram_id}`}
              target="_blank"
              className="instagram"
              rel="noreferrer">
              <BsInstagram viewBox="-2 -2 21 21" />
            </a>
          </li>
          <li className="icon">
            <a
              href={`http://twitter.com/${external_ids.twitter_id}`}
              target="_blank"
              className="twitter"
              rel="noreferrer">
              <BsTwitter viewBox="-2 -2 21 21" />
            </a>
          </li>
          <li className="icon">
            <a
              href={data.homepage}
              target="_blank"
              className="link"
              rel="noreferrer">
              <BsLink viewBox="-2 -2 21 21" />
            </a>
          </li>
          <li className="icon">
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}/`}
              target="_blank"
              className="imdb"
              rel="noreferrer">
              <FaImdb />
            </a>
          </li>
        </ul>
        <div className="status-details">
          <p>Status</p>
          <strong> {data.status} </strong>
        </div>
        <div className="status-details">
          <p>Original Language </p>
          <strong> {data.original_language} </strong>
        </div>
        {budget && (
          <div className="status-details">
            <p>Budget</p>
            <strong>
              {" "}
              {budget.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </strong>
          </div>
        )}
        {revenue && (
          <div className="status-details">
            <p>Revenue</p>
            <strong>
              {" "}
              {revenue.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </strong>
          </div>
        )}
      </div>
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
    </DetailsStyles>
  );
}

export default Details;
