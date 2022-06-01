import useHomeData from "../hooks/useHomeData";
import CarouselContainer from "../components/Carousel";
import HomeDetails from "../components/HomeDetails";
import Loader from "../components/Loader";

export default function HomePage() {
  const {
    movies,
    shows,
    moviesLoading,
    showsLoading,
    moviesError,
    showsError,
  } = useHomeData();
  if (moviesLoading || showsLoading) {
    return <Loader />;
  }
  const carouselMovies = movies.filter((movie, i) => i < 8);
  return (
    <>
      <CarouselContainer movies={carouselMovies} />
      <HomeDetails movies={movies} shows={shows} />
    </>
  );
}
