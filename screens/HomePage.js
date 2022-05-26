import { useEffect, useState } from "react";
import useHomeData from "../hooks/useHomeData";
import CarouselContainer from "../components/Carousel";
import HomeDetails from "../components/HomeDetails";

function HomePage() {
  const { movies, shows } = useHomeData();

  const carouselMovies = movies.filter((movie, i) => i < 8);

  return (
    <>
      <CarouselContainer movies={carouselMovies} />
      <HomeDetails movies={movies} shows={shows} />
    </>
  );
}

export default HomePage;
