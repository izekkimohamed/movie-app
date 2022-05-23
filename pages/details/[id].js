import DetailsPage from "../../screens/DetailsPage";

function Details({ data }) {
  return <DetailsPage data={data} />;
}
export async function getServerSideProps(ctx) {
  const { id, media_type } = ctx.query;

  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${key}&language=en-US&append_to_response=credits,videos,reviews,recommendations,external_ids`,
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Details;
