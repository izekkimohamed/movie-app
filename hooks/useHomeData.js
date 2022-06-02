import useMoviesData from "./useMoviesData";
import useTvData from "./useTvData";

export default function useHomeData() {
  const {
    data: movies,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useMoviesData();
  const {
    data: shows,
    isLoading: showsLoading,
    isError: showsError,
  } = useTvData();
  return {
    movies,
    shows,
    moviesLoading,
    showsLoading,
    moviesError,
    showsError,
  };
}
