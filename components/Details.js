/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import useDetailsData from "../hooks/useDetailsData";
import { DetailsStyles } from "../styles/DetailsStyles";
import CastList from "./details/Cast";
import Recommendations from "./details/Recommendations";
import Reviews from "./details/Reviews";
import Status from "./details/Status";
import Loader from "./Loader";

function Details() {
  const { id, media_type } = useRouter().query;
  const { data, isLoading, isError } = useDetailsData(id, media_type);

  if (!data) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  const {
    credits,
    budget,
    revenue,
    external_ids,
    reviews,
    status,
    original_languge,
    homepage,
  } = data;
  const cast = credits.cast.filter((cast, i) => i < 10);
  const recommendations = data.recommendations.results.filter(
    (recommendation, i) => i < 10,
  );

  return (
    <DetailsStyles>
      <CastList casts={cast} />
      <Status
        budget={budget}
        revenue={revenue}
        external_ids={external_ids}
        status={status}
        original_language={original_languge}
        homepage={homepage}
      />
      {reviews.results.length > 0 && <Reviews reviews={reviews} />}
      {recommendations.length > 0 && (
        <Recommendations recommendations={recommendations} />
      )}
    </DetailsStyles>
  );
}

export default Details;
