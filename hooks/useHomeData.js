import axios from "axios";
import { useQuery } from "react-query";

export default function useHomeData(type) {
  const {
    data: movies,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useQuery(
    ["movies", type],
    () =>
      axios.get(`/api/movies`).then((res) =>
        res.data.results.map((movie) => ({
          ...movie,
          media_type: "movie",
        })),
      ),

    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );

  const {
    data: shows,
    isLoading: showsLoading,
    isError: showsError,
  } = useQuery(
    ["tv", type],
    () =>
      axios.get(`/api/tv`).then((res) =>
        res.data.results.map((show) => ({
          ...show,
          media_type: "tv",
        })),
      ),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );
  return {
    movies,
    shows,
    moviesLoading,
    showsLoading,
    moviesError,
    showsError,
  };
}
