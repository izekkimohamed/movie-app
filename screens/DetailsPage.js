import Details from "/components/Details";
import DetailsHero from "/components/DetailsHero";

function DetailsPage({ data }) {
  return (
    <>
      <DetailsHero data={data} />
      <Details data={data} />
    </>
  );
}

export default DetailsPage;
