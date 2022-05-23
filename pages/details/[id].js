import { useRouter } from "next/router";
import useDetailsData from "../../hooks/useDetailsData";
import DetailsPage from "../../screens/DetailsPage";

function Details() {
  const { id, media_type } = useRouter().query;

  const { data, status } = useDetailsData(id, media_type);

  console.log(data);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <>{data && <DetailsPage data={data} />}</>;
  // return <h1>gg</h1>;
}

export default Details;
