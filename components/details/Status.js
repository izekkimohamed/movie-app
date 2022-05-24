import React from "react";
import { BsFacebook, BsInstagram, BsLink, BsTwitter } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";

function Status({
  budget,
  revenue,
  external_ids,
  status,
  original_language,
  homepage,
}) {
  return (
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
          <a href={homepage} target="_blank" className="link" rel="noreferrer">
            <BsLink viewBox="-2 -2 21 21" />
          </a>
        </li>
        <li className="icon">
          <a
            href={`https://www.imdb.com/title/${external_ids.imdb_id}`}
            target="_blank"
            className="imdb"
            rel="noreferrer">
            <FaImdb />
          </a>
        </li>
      </ul>
      <div className="status-details">
        <p>Status</p>
        <strong> {status} </strong>
      </div>
      <div className="status-details">
        <p>Original Language </p>
        <strong> {original_language} </strong>
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
  );
}

export default Status;
