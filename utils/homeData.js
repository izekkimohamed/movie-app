import { useQuery } from "react-query";

const useHomeData = () => {
  const { data, isLoading } = useQuery(
    "homeData",
    () =>
      Promise.all([
        fetch(`http://localhost:3000/api/movies/popular?page=${2}`),
        fetch("http://localhost:3000/api/movies/trending"),
        fetch("http://localhost:3000/api/tv/popular"),
      ]).then(([popularMovies, trendingMovies, popularTv]) =>
        Promise.all([
          popularMovies.json(),
          trendingMovies.json(),
          popularTv.json(),
        ]),
      ),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );

  return {
    isLoading,
    data,
  };
};
export default useHomeData;
