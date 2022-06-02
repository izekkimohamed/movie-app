import useHomeData from "../hooks/useHomeData";
import CarouselContainer from "../components/Carousel";
import HomeDetails from "../components/HomeDetails";
import Loader from "../components/Loader";

export default function HomePage() {
  const { movies, shows, moviesLoading, showsLoading } = useHomeData();
  if (moviesLoading || showsLoading) {
    return <Loader />;
  }
  const carouselMovies = movies.movies.filter((_, i) => i < 8);
  return (
    <>
      <CarouselContainer movies={carouselMovies} />
      <HomeDetails movies={movies.movies} shows={shows.shows} />
    </>
  );
}
